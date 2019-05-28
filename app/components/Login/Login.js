import React, { Component } from 'react'
import { View, Text , Image,StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import { whileStatement } from '@babel/types';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.firstContainer}>
        <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../images/Ucsc.jpg')} />
                    
         </View>
            <View style={styles.topicContainer}>
                <Text style={styles.text}> 
                    Evaluation System
                </Text>
            </View>
            <View style={styles.formContainer}>
            
                   <LoginForm />
            </View>
       </View>
       </View>

        )
    }
}

// define your styles
const styles = StyleSheet.create({
    firstContainer: {
        flex: 1,
        backgroundColor: '#3d9bf9'
    },
    container: {
        flex: 1,
        backgroundColor: '#3d9bf9',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        //width:deviceWidth*0.4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 25,
        height: 100,
    },
    topicContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        padding:50,
        fontWeight: 'bold',
        fontStyle: 'italic'
        
    },
    text:{
        color: '#fff',
        fontSize: 40,
        
    },
    logo: {
        //position: 'absolute',
        width: 150,
        height: 150
    },
    formContainer:{
        paddingTop:0,
        
    }
});
