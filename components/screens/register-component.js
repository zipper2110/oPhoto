import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

export class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View>
                <Text>Choose who</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity onPress={() => { this.onRegister() }}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onRegister() {
        this.props.navigation.navigate('WaitingConnection');
    }
}