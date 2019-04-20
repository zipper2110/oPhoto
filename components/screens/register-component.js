import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import {apiService} from "../../services/api.service";

export class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: ''
        };
    }

    render() {
        return (
            <View>
                <Text>Enter your nickname:</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TouchableOpacity onPress={() => { this.onRegister() }}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onRegister() {
      apiService.registerSubscriber(this.state.name, 100, 100).then(response => {
        apiService.subscriberId = response.id;
        this.props.navigation.navigate('WaitingConnection');
      });
    }
}