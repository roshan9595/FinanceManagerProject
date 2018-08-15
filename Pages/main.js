import React, {Component} from 'react';
import {StyleSheet,Text,View,SafeAreaView,ScrollView,Dimensions,Image} from 'react-native';
import Home from './homescreen';
import EmployeeList from './employeeList';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

export default class Main extends React.Component {

  render() {
    return (
      <DrawerList/>
    );
  }
}

const CustomDrawerComponent = (props) =>(
  <SafeAreaView style={{flex:1}}>
    <View style={{ height:150,backgroundColor:'white',alignItems:'center',
    justifyContent:'center'}}>
    <Image source={require('../assets/favicon.png')} style={{height:120,width:120,bordorRadius:50}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
  )

const DrawerList = createDrawerNavigator({
  HomeScreen: {
    screen: Home,
  },
  EmployeeListScreen: {
    screen: EmployeeList,
  },
},
{
    contentComponent: CustomDrawerComponent
  });



const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});
