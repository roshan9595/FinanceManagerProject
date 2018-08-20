import React, {Component} from 'react';
import {StyleSheet,FlatList,BackHandler,Text, View,Alert,Dimensions} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import {  LineChart,BarChart,PieChart,ProgressChart,ContributionGraph} from 'react-native-chart-kit';

import { fetchEmployeeByEmailId } from '../Firebase/DBDetails/employeeDB';

export default class Home extends React.Component {



  componentDidMount() {
   BackHandler.addEventListener('hardwareBackPress', this.exitAlert);
   fetchEmployeeByEmailId(this.props.navigation.state.params.EmailId)
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
       <View style={{flex: 1, flexDirection: 'column'}}>
       <View style={{ flexDirection: 'row',backgroundColor: '#000080'}}>
       <View style={{flex: 1,flexDirection: 'column' ,paddingTop:8,paddingBottom:8,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:18,color:'#ffffff'}}>
            Income
          </Text>
          <Text style={{fontSize:13,color:'#ffffff'}}>
            250000
          </Text>
        </View>  
        <View style={{flex: 1,flexDirection: 'column',paddingTop:8,paddingBottom:8,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:18,color:'#ffffff'}}>
            Income
          </Text>
          <Text style={{fontSize:13,color:'#ffffff'}}>
            250000
          </Text>
        </View>
        </View>
          <PieChart
            data={data}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor:'#e6f2ff',
              backgroundGradientFrom: '#66b3ff',
              backgroundGradientTo: '#0073e6',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                padding: 25
              }
            }}
            accessor="population"
          />
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

const data = [
  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F, legendFontSize: 15' }
]
