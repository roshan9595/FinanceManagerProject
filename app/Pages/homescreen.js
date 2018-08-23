import React, {Component} from 'react';
import {StyleSheet,FlatList,BackHandler,Text, View,Alert,Dimensions,ActivityIndicator} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';

import { fetchEmployeeByEmailId } from '../Firebase/DBDetails/employeeDB';
import { getTotalExpense } from '../Firebase/DBDetails/expenseDB';
import { getTotalInvestment } from '../Firebase/DBDetails/investmentDB';
import { getTotalSalary } from '../Firebase/DBDetails/employerDB';
import { retrieveEmployeeId } from '../Firebase/DBDetails/employeeDB';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      salary: 0,
      income: 0,
      Expense: 0,
    };
  }

  componentDidMount() {
    
   this.getData();
   BackHandler.addEventListener('hardwareBackPress', this.exitAlert);
  }

  getData = async () =>{
    setTimeout(() => {
     const value = JSON.stringify(retrieveEmployeeId())
    this.setState({ Expense: getTotalExpense(value) },() => {
      console.log("Data");
      console.log(this.state.Expense);
    })
    this.setState({income: getTotalInvestment(value) },() => {
      console.log("Data");
      console.log(this.state.income);
    })
    this.setState({ salary: getTotalSalary(value) },() => {
      console.log("Data");
      console.log(this.state.salary);
    })
   }, 10);
  }

  componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.exitAlert);
}

  exitAlert = () => {
  Alert.alert(
    'Confirm exit',
    'Do you want to quit the app?', [{
         text: 'Cancel',
         onPress: () => console.log('Cancel Pressed'),
         style: 'cancel'
     }, {
         text: 'OK',
         onPress: () => BackHandler.exitApp()
     }, ], {
         cancelable: false
     }
  )
  return true;
};

  render() {

      return (
       <View style={styles.container}>
       <Header>
        <Left>
          <Icon name='menu'
          onPress={() =>
            this.props.navigation.openDrawer()}/>
        </Left>
        <Right/>
       </Header>
       <View style={{flexDirection: 'column'}}>
       <View style={{ flexDirection: 'row',backgroundColor: '#000080'}}>
       <View style={{flex: 1,flexDirection: 'column' ,paddingTop:8,paddingBottom:8,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:18,color:'#ffffff'}}>
            Income
          </Text>
          <Text style={{fontSize:13,color:'#ffffff'}}>
            {this.state.income}
          </Text>
        </View>  
        <View style={{flex: 1,flexDirection: 'column',paddingTop:8,paddingBottom:8,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:18,color:'#ffffff'}}>
            Expense
          </Text>
          <Text style={{fontSize:13,color:'#ffffff'}}>
            {this.state.Expense+this.state.salary}
          </Text>
        </View>
        </View>
        </View>
        <Text style={{fontSize:25}}>Total Salary Paid - {this.state.salary} </Text>
        <View style={{margin:7}} /> 
        <Text style={{fontSize:25}}>Investment - {this.state.income}</Text>
        <View style={{margin:7}} /> 
        <Text style={{fontSize:25}}>Total Expense - {this.state.Expense}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
});

