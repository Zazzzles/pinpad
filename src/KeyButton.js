import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default class KeyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        borderWidth: new Animated.Value(2)
    };
  }

  render() {
    const { number } = this.props
    const animStyles = {borderWidth: this.state.borderWidth}
    return (
        <TouchableOpacity  onPress={this.handlePress(number)}>
            <Animated.View style={[styles.button, animStyles]}>
                <Text style={styles.numberText}>{number}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
  }

  handlePress = (number) => () =>{
    this.growBorder()
    this.props.handleKeyPressed(number)
  }

  growBorder = () =>{
    Animated.timing(this.state.borderWidth, {
        duration: 100,
        toValue: 4
    }).start(() => {
        Animated.timing(this.state.borderWidth, {
            duration: 100,
            toValue: 2
        }).start()
    })
  }

}

const styles = StyleSheet.create({
    button:{
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'grey',
        backgroundColor: 'white'
    },
    numberText:{
        color: "grey",
        fontSize: 20
    },
})