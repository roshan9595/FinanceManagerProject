import React, {Component} from 'react';
import {Button,TextInput,StyleSheet, Text, View,Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {auth} from '../../Firebase/config';
import { addExpenseToDB,expenseObj } from '../../Firebase/DBDetails/expenseDB';


export default class Expense extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
    EmployeeId:'EE001',
    Name:'',
    Date:'',
    Amount:'',
    errorMessage:null,
    };
   }  

   saveExpenseToDB = () => {
    
    expenseObj.employeeId = this.state.EmployeeId
    expenseObj.Expense = this.state.Name
    expenseObj.Amount = this.state.Amount
    expenseObj.Date = this.state.Date
    addExpenseToDB(expenseObj); 
    this.props.navigation.navigate('ExpenseList') 
   }

  render() {
    return (
      <View style={styles.container}>
                <Text 
                    style={{fontSize: 27}}>
                    Add New Expense
                </Text>
                <TextInput style={styles.textInput}
                onChangeText={(Name) => this.setState({Name})}
                  placeholder = 'Expense'
                  returnKeyType = {"next"}
                  onSubmitEditing={() => { this.Date.focus(); }}
                  />
                <TextInput style={styles.textInput}
                onChangeText={(Date) => this.setState({Date})}
                  placeholder = 'Date'
                  returnKeyType = {"next"}
                  onSubmitEditing={() => { this.Amount.focus(); }}
                 
                    />          
                <TextInput style={styles.textInput}
                onChangeText={(Amount) => this.setState({Amount})}
                  placeholder = 'Amount'
                   />
                <View style={{margin:7}} />
                <Button 
                        onPress={()=>{this.saveExpenseToDB()}}
                        title="Add Expense"
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
 
});
