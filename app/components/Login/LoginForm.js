import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, Dimensions } from 'react-native';
import Firebase from '../../../config/Firebase';
import HomePage from '../Screens/Subjects';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      //open:false,
      //  email:"",
      //  password:"",

      userEmail: "",
      userPassword: "",
      //students:[],
    };
    // this.updateInput = this.updateInput.bind(this)
    // this.handleLogin = this.handleLogin.bind(this)
    // console.log(this.state.email);
  }
  // updateInput = e => {
  //   this.setState({
  //       [e.target.email]: e.target.value
  //   });
  //   console.log(this.email);
  //   }

  //   handleClickOpen = () => {
  //       this.setState({ open: true });
  //   };

  //   handleClose = () => {
  //       this.setState({ open: false });
  //   };

  //   // Login = () =>{
  //   //   this.props.navigation.navigate('Homepage');
  //   // }

  //   handleLogin = () => {
  //     console.log(this.state.userEmail);
  //     //this.props.navigation.navigate('Homepage');
  //     const students = [];
  //     var Ref = Firebase.firestore().collection('students')
  //     var query = Ref.where('email', '==',this.state.userEmail).get()
  //     .then(snapshot => {
  //       if (snapshot.empty) {
  //         console.log('No matching documents.');
  //         return;
  //       }

  //       snapshot.forEach((doc) =>{
  //         const {email,password,type} = doc.data();
  //         students.push({
  //           key:doc.id,
  //           email,
  //           password

  //         });
  //       });

  //       this.setState({
  //         email: students[0].email,
  //         password: students[0].password,

  //       });

  //       //console.log(this.state);
  //       const next =  this.handleLoggingType();
  //       //console.log(next);
  //       window.location.href = next;
  //     })
  //     .catch(err => {
  //       console.log('Error getting documents', err);
  //     });
  //   }; 

  //   handleLoggingType = () => {
  //     if(this.state.password==this.state.userPassword){
  //       console.log("success");
  //     } else {
  //       console.log("object");
  //     }
  //   }
  componentDidMount() {
    var that = this;
    Firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.redirectUser();
      }
    });
  }


  loginUser = async (userEmail, userPassword) => {

    //const { navigate } = this.props.navigation;

    if (userEmail != '' && userPassword != '') {

      try {
        //const { navigate } = this.props.navigation;
        Firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
          .then(function (data) {
            console.log(userEmail);
            console.log(userPassword);
            console.log(data);
            this.props.navigation.navigate("App");
          }).catch((err) => {
            alert(err);
          });
        console.log(user);
      } catch (error) {

        console.log(error);
      }
    } else {
      alert('Missing email or password');
    }

  }

  redirectUser = () => {
    this.props.navigation.navigate("App");
  }


  render() {
    return (
      <View style={StyleSheet.container}>
        <TextInput style={styles.input}
          autoCapitalize="none"

          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          placeholderTextColor='rgba(225,225,225,0.7)'
          onChangeText={(userEmail) => this.setState({ userEmail })} />

        <TextInput style={styles.input}
          returnKeyType="go"
          onChangeText={(userPassword) => this.setState({ userPassword })}
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry />

        <TouchableOpacity style={styles.buttonContainer}

          onPress={() => this.loginUser(this.state.userEmail, this.state.userPassword)}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => this.props.navigation.navigate("ForgotPassword")}
          style={styles.text}>
          <Text style={styles.buttonText} onPress={() => this.onClickListener('restore_password')}>Forgot Password?</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {

    height: 45,
    width: 450,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {

    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  text: {
    padding: 20
  }

});
