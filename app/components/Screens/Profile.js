import React, { Component } from 'react'
import { View, Text, TextInput , Button,  Image, StyleSheet, ScrollView } from 'react-native';
//import { createRequireFromPath } from 'module';
import { Avatar } from 'react-native-elements';


class Profile extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{width: '100%'}}>
                    <View style={styles.container}>
                        <View style={styles.coverImageArea}>
                            <Image style={styles.coverImage} source={require('../../images/coverPhoto.jpg')}/>
                            <Avatar
                            
                            rounded
                            style={styles.profileImage}
                            
                        />
                        </View>
                        <Button title="Sign Out"  />
                    </View>
                    <View style={styles.formArea}>
                        <TextInput
                            placeholder="First Name"
                            placeholderTextColor="rgba(255,255,255,0.8)"
                            style={styles.input}
                            //onChangeText={text => this.setState({ firstName: text })}
                            //value={this.state.firstName}
                        />
                        <TextInput
                            placeholder="Last Name"
                            placeholderTextColor="rgba(255,255,255,0.8)"
                            style={styles.input}
                            //onChangeText={text => this.setState({ lastName: text })}
                            // value={this.state.lastName}
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="rgba(255,255,255,0.8)"
                            style={styles.input}
                            // onChangeText={text => this.setState({ email: text })}
                            // value={this.state.email}
                        />
                        <TextInput
                            placeholder="Contact Number"
                            placeholderTextColor="rgba(255,255,255,0.8)"
                            style={styles.input}
                            // onChangeText={text => this.setState({ contact: text })}
                            // value={this.state.contact}
                        />
                        <TextInput
                            placeholder="Address"
                            placeholderTextColor="rgba(255,255,255,0.8)"
                            style={styles.input}
                            // onChangeText={text => this.setState({ address: text })}
                            // value={this.state.address}
                        />
                    </View>
                    <Button style={styles.saveButton} title="Save"  />
                </ScrollView>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#CBC7C7',
        width:'100%'
    },

    coverImageArea:{
        // backgroundColor:'red',
        alignSelf:'center',
        height: '5%',
        width:'auto',
        position:'absolute',
        top:10
    },

    coverImage:{
        height: 200,
        width: 450
    },

    profileImage:{
        backgroundColor: 'rgba(149, 176, 183, 1)',
        width:80,
        height:80,
        borderRadius:80,
        position: 'relative'
    },

    text:{
        fontSize: 20,
        
    },

    input: {
        
        height: 45,
        
        borderRadius: 5,
        backgroundColor: 'rgba(149, 176, 183, 1)',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 10
    },

    formArea: {
        paddingTop: 300,
        paddingHorizontal: 10
    },

    saveButton: {
        marginTop:100,
        marginBottom: 100,
        height:45,
    },

});

export default Profile;
