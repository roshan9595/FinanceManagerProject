import React, {Component} from 'react';
import {StyleSheet,FlatList,BackHandler,Text, View,Alert} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';


export default class EmployeeList extends React.Component {

  

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
       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>EmployeeList Screen!
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});
