import React, {Component} from 'react';
import {Button,TextInput,StyleSheet, Text, View,Alert} from 'react-native';


import { addEmployerToDB,employerObj } from '../../Firebase/DBDetails/employerDB';
import { addSalaryToDB,salaryObj } from '../../Firebase/DBDetails/salaryDB';

import DatePicker from 'react-native-datepicker';


export default class Employer extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
    EmployeeId:'EE001',
    EmployerId:'',
    Name:'',
    EmailId:'',
    startDate:'',
    Salary:'',
    Bonus:'',
    errorMessage:null,
    };
   }  

   saveEmployerDB = () => {
    employerObj.id = this.state.EmployerId
    employerObj.employeeId = this.state.EmployeeId
    employerObj.employerName = this.state.Name
    employerObj.EmailId = this.state.EmailId
    employerObj.startDate = this.state.startDate
    salaryObj.employerId = this.state.EmployerId
    salaryObj.salary = this.state.Salary
    salaryObj.bonus = this.state.Bonus
    addEmployerToDB(employerObj);  
    addSalaryToDB(salaryObj);
    this.props.navigation.navigate('EmployerList')
   }

  render() {
    return (
      <View style={styles.container}>
                <Text 
                    style={{fontSize: 27}}>
                    Finance Manager
                </Text>
                <TextInput style={styles.textInput}
                onChangeText={(EmployerId) => this.setState({EmployerId})}
                  placeholder = 'Employer Id'
                  returnKeyType = {"next"}
                  />
                <TextInput style={styles.textInput}
                onChangeText={(Name) => this.setState({Name})}
                  placeholder = 'Name'
                  returnKeyType = {"next"}
                  />
                <TextInput style={styles.textInput}
                onChangeText={(EmailId) => this.setState({EmailId})}
                  placeholder = 'EmailId'
                  returnKeyType = {"next"}
                  />
                <DatePicker
                    style ={styles.DateInput}
                    date={this.state.startDate}
                    mode="date"
                    format="YYYY-MM-DD"
                    placeholder = 'StartDate'
                    returnKeyType = {"next"}
                    minDate="2016-05-01"
                    showIcon={false}
                    customStyles={{
                     dateInput: {
                        alignItems : 'flex-start',
                        padding:5
                    },
                   }}
                  onDateChange={(startDate) => {this.setState({startDate: startDate});}}/>             
                <TextInput style={styles.textInput}
                onChangeText={(Salary) => this.setState({Salary})}
                  placeholder = 'Salary'
                  returnKeyType = {"next"}
                  />   
                <TextInput style={styles.textInput}
                onChangeText={(Bonus) => this.setState({Bonus})}
                  placeholder = 'Bonus after 6 months in %'
                   />   
                <View style={{margin:7}} />
                <Button 
                        onPress={()=>{this.saveEmployerDB()}}
                        title="Add Employer"
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
