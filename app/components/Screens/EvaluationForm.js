import React, { Component } from 'react'
import { View, Text , Image,StyleSheet } from 'react-native';


class EvaluationForm extends Component {
    constructor (props){
        super(props);
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    This is Evaluation
                </Text>
            </View>

        )
    }
}

export default EvaluationForm; 
