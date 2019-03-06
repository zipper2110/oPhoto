import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export class HomeComponent extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>What do you want?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              buttonStyle={styles.button}
              onPress={() => { this.onPressTranslate() }}>
              <Text style={styles.button}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              buttonStyle={styles.button}
              onPress={() => { this.onPressLook() }}>
              <Text style={styles.button}>Look</Text>
            </TouchableOpacity>
          </View>
          {/*<Text>Button clicked: {this.state.clickedButton}</Text>*/}
        </View>
      );
    }
  
    onPressTranslate() {
      this.props.navigation.navigate('Share')
    }
  
    onPressLook() {
      this.props.navigation.navigate('Look')
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    text: {
      fontSize: 26,
      color: 'black',
      fontWeight: '600',
      marginBottom: 40
    },
    button: {
      width: 120,
      color: '#9c8762',
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      margin: 10,
      borderWidth: 4,
      borderStyle: 'solid',
      borderColor: '#9c8762'
    }
  });
  