import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images, Metrics } from '../Themes'
import MoleHole from '../Components/MoleHole'

// Styles
import styles from './Styles/HomeStyles'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount () {
    let remainingHeight = Metrics.screenHeight - (Metrics.screenWidth / 2.08)
    this.setState({
      count: parseInt(remainingHeight/150)
    })
  }

  renderMoleHoles (n) {
    let parent = []

    for (let i = 0; i < n; i++) {
      parent.push(<View style={styles.moleArea} key={i}>
        <MoleHole size={150}/>
        {(i%2 === 0) && <MoleHole size={150}/>}
      </View>)
    }

    return parent

  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.headerBackground} style={styles.headerBackgroundImage} />
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <Text> {this.state.count} </Text>

          {this.renderMoleHoles(this.state.count)}

      </View>
    )
  }
}
