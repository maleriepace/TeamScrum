import React from "react";
import { Alert, StyleSheet, TextInput, View, Button } from "react-native";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", team: "" };
  }

  logIn() {
    Alert.alert("click!");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          placeholder="Your Name"
        />
        <TextInput
          style={styles.textBox}
          onChangeText={team => this.setState({ team })}
          value={this.state.team}
          placeholder="Your Team Name"
        />
        <Button onPress={this.logIn} title="Join" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textBox: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1
  }
});
