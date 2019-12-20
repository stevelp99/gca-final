import React from "react";
import { Button } from "react-native";

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Huy's profile"
        onPress={() => navigate("myMap", { name: "Huy" })}
      />
    );
  }
}
export default WelcomeScreen;
