import React, {Component} from 'react';
import {StyleSheet,FlatList,BackHandler,Text, View,Alert} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';


export default class Home extends React.Component {

  componentDidMount() {
   BackHandler.addEventListener('hardwareBackPress', this.exitAlert);
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
       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Hi Home!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
