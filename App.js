import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state = { clickedButton: "none" };
}

  render() {
    return (
      <View style={styles.container}>
        <Text>What you want?</Text>
        <Button
          onPress={() => {this.onPressTranslate()}}
          title="Translate"
          color="#841584"
          accessibilityLabel=""
        />
        <Button
          onPress={() => {this.onPressLook()}}
          title="Look"
          color="#841584"
          accessibilityLabel=""
        />
        <Text>Button clicked: {this.state.clickedButton}</Text>
      </View>
    );
  }

  onPressTranslate() {
    this.clickButton("Translate");
  }

  onPressLook() {
    this.clickButton("Look");
  }

  clickButton(buttonName) {
    this.setState({clickedButton: buttonName});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
