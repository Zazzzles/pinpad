import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types'

import KeyButton from './KeyButton'
import PinContainer from './PinContainer'

export default class Pinpad extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pinInput: [],
        bgColor: new Animated.Value(0)
    };
  }

  render() {
    const { pinInput,bgColor } = this.state
    const { pin, onCorrect, onIncorrect } = this.props
    var color = bgColor.interpolate({
        inputRange: [0, 300],
        outputRange: ['rgba(255, 255, 255, 1)', 'rgba(255, 0, 0, 0.4)']
    });

    return (
      <Animated.View style={[styles.container, {backgroundColor: color}]}>
        <View style={styles.pinContainer}>

            <PinContainer
                pin={pin}
                pinInput={pinInput}
                onCorrect={onCorrect}
                onIncorrect={() => {
                    onIncorrect()
                    this.handleIncorrect()
                }}
            />

        </View>
        <View style={styles.padContainer}>

            <View style={styles.row}>
                  <KeyButton
                    number={1}

                    handleKeyPressed={this.handleKeyPressed}
                  />
                   <KeyButton
                    number={2}
                    handleKeyPressed={this.handleKeyPressed}
                  />
                    <KeyButton
                    number={3}
                    handleKeyPressed={this.handleKeyPressed}
                  />
            </View>

            <View style={styles.row}>
            <KeyButton
                    number={4}
                    handleKeyPressed={this.handleKeyPressed}
                  />
                     <KeyButton
                    number={5}
                    handleKeyPressed={this.handleKeyPressed}
                  />
                     <KeyButton
                    number={6}
                    handleKeyPressed={this.handleKeyPressed}
                  />
            </View>

            <View style={styles.row}>
            <KeyButton
                    number={7}
                    handleKeyPressed={this.handleKeyPressed}
                  />
                    <KeyButton
                    number={8}
                    handleKeyPressed={this.handleKeyPressed}
                  />
                     <KeyButton
                    number={9}
                    handleKeyPressed={this.handleKeyPressed}
                  />
            </View>

            <View style={styles.botrow}>

                  {
                      pinInput.length ? 
                        <TouchableOpacity style={styles.delButton} onPress={this.handleDelete}>
                            <Text style={styles.numberText}>DEL</Text>
                        </TouchableOpacity> : 
                        <View style={styles.spacerButton} >
                        
                        </View>
                  }
                   
                   <KeyButton
                    number={0}
                    handleKeyPressed={this.handleKeyPressed}
                  />

                    <View style={styles.spacerButton}>
                       
                    </View>

            </View>

        </View>
      </Animated.View>
    );
  }

  handleKeyPressed = (key) =>{
      if(this.state.pinInput.length !== this.props.pin.length){
        this.state.pinInput.push(key)
      }
    this.setState({pinInput: this.state.pinInput})
  }

  handleDelete = () =>{
    this.state.pinInput.pop()
    this.setState({pinInput: this.state.pinInput})
  }

  handleIncorrect = () =>{
    Animated.timing(this.state.bgColor,{
        toValue: 300,
        duration: 120
    }).start(() => {
        Animated.timing(this.state.bgColor,{
            toValue: 0,
            duration: 120
        }).start()
    })
  }

  renderDots = () => this.props.pin.map((item, index) => {
    return(
        <View key={index} style={[styles.pinDot, index < this.state.pinInput.length && styles.activePindot]}>
    
        </View>
      )
  })

}

Pinpad.defaultProps = {
    pin: [1,2,3,4], 
    onCorrect: () => console.log("Correct!"), 
    onIncorrect: () => console.log("Incorrect!")
}

Pinpad.propTypes = {
    pin: PropTypes.array.isRequired, 
    onCorrect: PropTypes.func.isRequired, 
    onIncorrect: PropTypes.func
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    pinContainer:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    padContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row:{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginBottom: 20
    },
   
    spacerButton:{
        height: 70,
        width: 70,
    },
    delButton:{
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    numberText:{
        color: "grey",
        fontSize: 20
    },
    botrow:{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginBottom: 20
    }
})