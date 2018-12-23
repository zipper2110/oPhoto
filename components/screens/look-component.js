import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class LookComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = { clickedButton: "none" };
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Look?</Text>
        </View>
      );
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
  