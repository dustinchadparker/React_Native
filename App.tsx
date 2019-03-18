/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface IAppProps { }
interface IappState { users: { id: number, title: string }[] }

export default class App extends Component<IAppProps, IappState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      users: []
    }

  };



  async componentDidMount() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let users = await res.json();
    this.setState({ users });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.users.map(user => (
          <Text key={user.id} style={styles.textStyle}>{user.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0091ea',
  }, textStyle: {
    fontSize: 20,
    margin: 5,
    color: 'white',
  }

});
