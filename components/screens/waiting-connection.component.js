import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {apiService} from "../../services/api.service";

export class WaitingConnection extends React.Component {

  constructor() {
    super();
    this.state = {
      status: ''
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      apiService.getSubscriberStatus().then(({ status }) => {
        console.log(status);
        this.setState({ status });
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Waiting... Your id is</Text>
        <Text>{apiService.subscriberId}</Text>
        <Text>{this.state.status}</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
});
