import React, {Component} from 'react';
import {Button,TextInput,StyleSheet, Text, View,Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';


import { addInvestmentToDB,investmentObj } from '../../Firebase/DBDetails/investmentDB';


export default class Investment extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
    EmployeeId:'EE001',
    InvestorName:'',
    Date:'',
    Amount:'',
    errorMessage:null,
    };
   }  
   
   saveInvestmentToDB = () => {
     
    investmentObj.employeeId = this.state.EmployeeId
    investmentObj.InvestorName = this.state.InvestorName
    investmentObj.Date = this.state.Date
    investmentObj.Amount = this.state.Amount
    addInvestmentToDB(investmentObj);
    this.props.navigation.navigate('InvestmentList')
   }

  render() {
    return (
      <View style={styles.container}>
                <Text 
                    style={{fontSize: 27}}>
                    New Investment
                </Text>
                <TextInput style={styles.textInput}
                onChangeText={(InvestorName) => this.setState({InvestorName})}
                  placeholder = 'InvestorName'
                  returnKeyType = {"next"}
                  />
                 <DatePicker
                    style ={styles.DateInput}
                    date={this.state.Date}
                    mode="date"
                    format="YYYY-MM-DD"
                    placeholder = 'Date'
                    returnKeyType = {"next"}
                    minDate="2016-05-01"
                    showIcon={false}
                    customStyles={{
                     dateInput: {
                        alignItems : 'flex-start',
                        padding:5
                    },
                   }}
                  onDateChange={(Date) => {this.setState({Date: Date});}}/>          
                <TextInput style={styles.textInput}
                onChangeText={(Amount) => this.setState({Amount})}
                  placeholder = 'Amount'
                   />
                <View style={{margin:7}} />
                <Button 
                        onPress={()=>{this.saveInvestmentToDB()}}
                        title="Add Investment"
                    />        
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding:50,
  },
  textInput:{
  	borderColor:'black',
    backgroundColor:'#D3D3D3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    margin:10,
  },
  DateInput:{
    width:'95%',
    borderColor:'black',
    backgroundColor:'#D3D3D3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    margin:10,
  },
  

 
});
