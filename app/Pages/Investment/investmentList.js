import React, {Component} from 'react';
import {StyleSheet,FlatList,Text,View,} from 'react-native';
import {Header,Right,Left,Icon} from 'native-base';
import { List,ListItem} from "react-native-elements";



export default class InvestmentList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

   componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

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
    return (
       <View style={styles.container}>
       <Header>
        <Left>
          <Icon name='menu'
          onPress={() =>
            this.props.navigation.openDrawer()}/>
        </Left>
        <Right>
          <Icon name='add'
          onPress={() =>
            this.props.navigation.navigate('AddInvestment')}/>
        </Right>
       </Header>
        <FlatList
         data={this.state.data}
         renderItem={({item}) => (
          <ListItem
          title={item.name.first}
          subtitle={item.email}
          containerStyle={{ borderBottomWidth: 0 }}
          />
          )}
          keyExtractor={item =>item.email}
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
});