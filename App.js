import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pinpad from './src/Pinpad'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Pinpad
          pin={[2,2,5,4]}
          onCorrect={() => console.log("Correct!")}
          onIncorrect={() => console.log("Incorrect!")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
