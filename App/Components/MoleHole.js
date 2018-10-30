import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Images } from '../Themes'
import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/MoleHoleStyles'

class MoleHole extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.number
  }

  render () {
    let { size } = this.props
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{ width: size, height: size }}>
        <Image source={Images.hole} style={[styles.holeImage, { width: size , height: size/2, marginTop: size/3 }]} />
        <Image source={Images.holeMask} style={[styles.holeMaskImage, { width: size + 20 , height: size/2.8, marginTop: -size/4.8, marginLeft: -10 }]} />
      </TouchableOpacity>
    )
  }
}

export default MoleHole
