import React, {Component}  from 'react';
import { createDrawerNavigator,createStackNavigator,DrawerItems } from 'react-navigation';
import {StyleSheet,Text,View,SafeAreaView,Button,ScrollView,Dimensions,Image} from 'react-native';


import Login from '../Pages/login';
import SignUp from '../Pages/signup';
import Home from '../Pages/homescreen';
import EmployerList from '../Pages/Employer/employerList';
import Employer from '../Pages/Employer/addemployer';
import InvestmentList from '../Pages/Investment/investmentList';
import Investment from '../Pages/Investment/addinvestment';
import ExpenseList from '../Pages/Expense/expenseList';
import Expense from '../Pages/Expense/addexpense';

const CustomDrawerComponent = (props) =>(
  <SafeAreaView style={{flex:1}}>
    <View style={{ height:150,backgroundColor:'white',alignItems:'center',
    justifyContent:'center'}}>
    <Image source={require('../../assets/favicon.png')} style={{height:120,width:120,borderWidth:50}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
  )

export const EndStack = createStackNavigator({
  EndScreen: {
    screen: Login,
    navigationOptions:{
    headerLeft: null,
    header: null,
  }
  },
});

export const EmployerStack = createStackNavigator({
  EmployerList: {
    screen: EmployerList,
    navigationOptions:{
    headerLeft: null,
    header: null,
  }
  },
  AddEmployer: {
    screen: Employer,
  },
});

export const InvestmentStack = createStackNavigator({
  InvestmentList: {
    screen: InvestmentList,
    navigationOptions:{
    headerLeft: null,
    header: null,
  }
  },
  AddInvestment: {
    screen: Investment,
  },
});

export const ExpenseStack = createStackNavigator({
  ExpenseList: {
    screen: ExpenseList,
    navigationOptions:{
    headerLeft: null,
    header: null,
  }
  },
  AddExpense: {
    screen: Expense,
  },
});


export const DrawerList = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  EmployerList: {
    screen: EmployerStack,
  },
  Investment: {
    screen: InvestmentStack,
  },
  Expenses: {
    screen: ExpenseStack,
  },
  LogOut: {
    screen: EndStack,
  },
},
{
    contentComponent: CustomDrawerComponent
  });

export const RootStack = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions:{
    header: null,
  }
  },
  SignUpScreen:{
    screen: SignUp,
    navigationOptions:{
    headerLeft: null,
    header: null,
  }
  },
  MainScreen:{
    screen: DrawerList,
  },
},
  {
  mode: 'modal',
  headerMode: 'none',
});



