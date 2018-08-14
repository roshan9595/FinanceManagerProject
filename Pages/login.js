

import React, {Component} from 'react';
import {Button,TextInput,StyleSheet, Text, View,Alert} from 'react-native';




export default class Login extends Component<Props> {

   constructor(props) {
    super(props);
    this.state = {username: '',
    password:''};
   
  }  

  render() {
    return (
      <View style={styles.container}>
                <Text 
                    style={{fontSize: 27}}>
                    Finance Manager
                </Text>
                <TextInput style={styles.textInput}
                onChangeText={(username) => this.setState({username})}
                  placeholder = 'Email Id'
                  returnKeyType = {"next"}
                  onSubmitEditing={() => { this.password.focus(); }}
                  autoFocus = {true}
                    />
                <TextInput style={styles.textInput}
                onChangeText={(password) => this.setState({password})}
                  placeholder = 'Password'
                  secureTextEntry={true}
                  ref={(input) => { this.password = input; }}
                   />
                <View style={{margin:7}} />
                <Button 
                        onPress={()=>{this.onSubmitPressed()}
                      }
                        title="Login"
                    />      
      </View>
    );
  }
  onSubmitPressed(){
  Alert.alert("Alert box","Welcome "+this.state.username)
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
