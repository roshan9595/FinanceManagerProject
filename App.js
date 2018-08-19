/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { RootStack } from './app/Routes/routes';



export default class App extends Component<Props> {

   render() {
    return (
        <RootStack/>
    );
  }
 
}
