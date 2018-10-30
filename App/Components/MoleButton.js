import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './Styles/MoleButtonStyles'
import { Images } from '../Themes'

export default class MoleButton extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render () {
    return (
      <View style={[styles.button, {  }]}>
        <Image source={Images.button} style={styles.buttonImage} />
        <Text style={[styles.buttonText, this.props.style]}> {this.props.text} </Text>
      </View>
    )
  }
}
