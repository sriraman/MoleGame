import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Images, Colors } from '../Themes'
import { Text, TouchableOpacity, Image, View, Animated } from 'react-native'
import styles from './Styles/MoleHoleStyles'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

class MoleHole extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.number
  }

  rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min );
  }

  constructor (props) {
    super(props)
    this.state = {
      marginTop: new Animated.Value(120)
    }
    this.onHit = this.onHit.bind(this)
  }

  show() {
    Animated.timing(
      this.state.marginTop,
      {
        toValue: 20,
        duration: 300,
      }
    ).start();
    setTimeout(() => {
      this.hide()
    }, this.rand(1000 / this.props.speed, 2000 / this.props.speed))
  }

  hide() {
    Animated.timing(
      this.state.marginTop,
      {
        toValue: 120,
        duration: 300,
      }
    ).start();
  }

  componentDidMount () {
    setTimeout(() => {
      this.show()
    }, this.rand(0, 5000))
    setInterval(() => {
      setTimeout(() => {
        this.show()
      }, this.rand(0, 5000))
    }, 5000)
  }

  onHit () {
    this.setState({
      marginTop: new Animated.Value(120)
    })
    this.props.increaseScore()
  }

  render () {
    let { size } = this.props
    return (
      <View onPress={this.props.onPress} style={{ width: size, height: size }}>
        <Image source={Images.hole} style={[styles.holeImage, { width: size , height: size/2, marginTop: size/3 }]} />
        <Image source={Images.holeMask} style={[styles.holeMaskImage, { width: size + 20 , height: size/2.8, marginTop: -size/4.8, marginLeft: -10 }]} />
        <View style={{ width: size, height: 100, zIndex: 1, marginTop: -10, backgroundColor: Colors.soil }} />
        <AnimatedTouchable style={{ position: 'absolute', width: size/2, height: (size * 5/6), marginLeft: size/4, zIndex: 0, marginTop: this.state.marginTop }} onPress={this.onHit} activeOpacity={1}>
          <Image source={Images.mole} style={[styles.moleImage, { width: size/2, height: (size * 5/6) }]}/>
        </AnimatedTouchable>
      </View>
    )
  }
}

export default MoleHole
