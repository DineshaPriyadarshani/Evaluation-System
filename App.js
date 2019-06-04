import React, {Component} from 'react';
import { AppRegistry, Dimensions, ActivityIndicator, AsyncStorage, View, StyleSheet, StatusBar } from "react-native";
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
//import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
//import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './app/components/Login/Login';
import LoginForm from './app/components/Login/LoginForm';
import Profile from './app/components/Screens/Profile';
import Message from './app/components/Screens/Message';
import EvaluationForm from './app/components/Screens/EvaluationForm';
import Subjects from './app/components/Screens/Subjects';



class AuthLoadingScreen extends Component {

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    
    this.props.navigation.navigate(userToken ? "Auth" : "Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});



const AppStack = createMaterialTopTabNavigator(
  {
      Profile: {screen:Profile },
      EvaluationForm: {screen:EvaluationForm },
      Message: {screen:Message }
  }
);

const navigator = createStackNavigator(
  {
    Login:{
      screen:LoginForm
  },
    App:{
      screen:AppStack
    }        
  },{
    initialRouteName:"Login", 
    mode: 'modal',       
    headerMode:"none"
}
  
)

const AppContainer = createAppContainer(navigator);
export default AppContainer;
