import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export class ShareWhoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clickedButton: 'none' };
    }

    render() {
        return (
            <View>
                <Text>Choose who</Text>
                <TouchableOpacity onPress={() => { this.onChooseWho() }}>
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onChooseWho() {
        this.props.navigation.navigate('Share');
    }
}