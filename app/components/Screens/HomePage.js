import React, { Component } from 'react'
import { View, Text , Image,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Profile from './Profile';
import EvaluationForm from './EvaluationForm';
import Message from './Message';

const navigator = createMaterialTopTabNavigator(
    {
        Profile: {screen:Profile },
        EvaluationForm: {screen:EvaluationForm },
        Message: {screen:Message }
    }
)

const MainStack = createAppContainer(navigator);

export default class HomePage extends Component {
    render() {
        return (
            <MainStack />
        )
    }
}


