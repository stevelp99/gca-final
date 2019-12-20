import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  Image,
  StatusBar
} from "react-native";
import logo from "../assets/images/GCAPurple.png";

class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        </View>
        <StatusBar barStyle="light-content" />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email"
          placeholderTextColor="#000"
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          title="Go to Huy's profile"
          onPress={() => navigate("myMap", { name: "Huy" })}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.signupText}>Do not have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text
              style={styles.signupButton}
              onPress={() => navigate("SignupScreen")}
            >
              {" "}
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "#2980b6",
    color: "#fff"
  },
  logo: {
    marginLeft: -5,
    width: 500,
    height: 300
  },
  signupText: {
    color: "#000",
    fontSize: 20
  },
  signupButton: {
    color: "#000",
    fontSize: 20,
    fontWeight: "500"
  }
});

export default LoginScreen;
