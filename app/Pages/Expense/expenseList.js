import React, {Component} from 'react';
import {StyleSheet,FlatList,Text,View,ActivityIndicator} from 'react-native';
import {Header,Right,Left,Icon,Body,Title} from 'native-base';
import { List,ListItem} from "react-native-elements";

import { fetchAllExpensesByEmployeeId } from '../../Firebase/DBDetails/expenseDB';
import { retrieveEmployeeId } from '../../Firebase/DBDetails/employeeDB';

export default class ExpenseList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

   componentDidMount() {
    
    this.fetchData();
   
  }

  fetchData = async () =>{
   setTimeout(() => {
    const value = JSON.stringify(retrieveEmployeeId())
    this.setState({ data: fetchAllExpensesByEmployeeId(value) }, () => {
      console.log("Data");
      console.log(this.state.data);
    })
   }, 10);
 }
  renderSeparator = () => {
    return(
      <View
        style={{
          height:1,
          width:"86%",
          backgroundColor:"#CED0CE",
        }}
      />
      )
  }

  render() {
    if (!this.state.data) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
    return (
       <View style={styles.container}>
       <Header>
        <Left>
          <Icon name='menu'
          onPress={() =>
            this.props.navigation.openDrawer()}/>
        </Left>
        <Body>
            <Title>Expense List</Title>
          </Body>
        <Right>
          <Icon name='add'
          onPress={() =>
            this.props.navigation.navigate('AddExpense')}/>
        </Right>
       </Header>
        <FlatList
         data={this.state.data}
         renderItem={({item}) => (
          <ListItem 
          title={item.Date}
          subtitle={
            <View style={styles.subtitleView}>
              <Text>{item.Expense}</Text>
              <Text>{item.Amount}</Text>
            </View>
          }
          containerStyle={{ borderBottomWidth: 0 }}
          />
          )}
          keyExtractor={item =>item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
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
  subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5
  },
});