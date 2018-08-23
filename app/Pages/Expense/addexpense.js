import React, {Component} from 'react';
import {Button,TextInput,StyleSheet, Text, View,Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';

import { retrieveEmployeeId } from '../../Firebase/DBDetails/employeeDB';;
import { addExpenseToDB,expenseObj } from '../../Firebase/DBDetails/expenseDB';


export default class Expense extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
    EmployeeId: '',
    Name:'',
    Date:'',
    Amount:'',
    errorMessage:null,
    };
   }  

   saveExpenseToDB = () => {
    setTimeout(() => {
      const value = JSON.stringify(retrieveEmployeeId())
    expenseObj.employeeId = value
    expenseObj.Expense = this.state.Name
    expenseObj.Amount = this.state.Amount
    expenseObj.Date = this.state.Date
    addExpenseToDB(expenseObj); 
    this.props.navigation.navigate('ExpenseList') 
    }, 5000);
    
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
