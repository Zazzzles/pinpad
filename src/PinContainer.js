import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default class PinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        wiggle: new Animated.Value(0)
    };
  }

  render() {
    const spin = this.state.wiggle.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '6deg']
    })

    return (
        <Animated.View style={[styles.pinInput, {transform: [{rotate: spin}] }]}>
            {this.renderDots()}
        </Animated.View>
    );

  }

  renderDots = () => {
    const { pinInput, pin } = this.props
    if(pinInput.length === pin.length){
        this.checkPin()
      }
    return pin.map((item, index) => {
      return(
          <View key={index} style={[styles.pinDot, index < this.props.pinInput.length && styles.activePindot]}>
      
          </View>
        )
    })
  }

  checkPin = () =>{
    const { pinInput, pin } = this.props
    if(JSON.stringify(pinInput) === JSON.stringify(pin)){
        this.props.onCorrect()
    }else{
        this.props.onIncorrect()
        this.doWiggle()
    }
  }

  doWiggle = () =>{
      Animated.sequence([
        Animated.timing(this.state.wiggle, {
            duration: 100,
            toValue: 1
        }),
        Animated.timing(this.state.wiggle, {
            duration: 100,
            toValue: -1
        }),
        Animated.timing(this.state.wiggle, {
            duration: 100,
            toValue: 0
        })
      ]).start()

  }

}

const styles = StyleSheet.create({
    pinInput:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 60
    },
    pinDot:{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    activePindot:{
        backgroundColor: 'rgba(0,0,0,1)'
    },
})