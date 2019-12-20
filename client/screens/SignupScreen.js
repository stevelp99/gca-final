import React from "react";
import axios from "axios";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { NavigationActions } from "react-navigation";
import logo from "../assets/images/GCAPurple.png";export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSignup = () =>{
   

    
    var url = "http://localhost:3000/data/create";
    const { email, password } = this.state;
    axios.post(url, {
      email: email,
      password: password
    });
    this.setState  
      ({email: "", password: ""})
    Alert.alert("Account Registered, press back button")
  }  
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email"
          placeholderTextColor="#000"
          onChangeText={email => this.setState({ email })}
          defaultValue={this.state.email}
        />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          defaultValue={this.state.password}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handleSignup.bind(this)}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "#DADFE0",
    marginBottom: 10,
    padding: 10,
    color: "#000"
  },
  logo: {
    marginLeft: 5,
    width: 500,
    height: 300
  },
  buttonContainer: {
    backgroundColor: "#763097",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  loginButton: {
    backgroundColor: "#2980B6",
    color: "#fff"
  }
});