import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images, Metrics } from '../Themes'
import MoleHole from '../Components/MoleHole'
import MoleButton from '../Components/MoleButton'
import MoleGameActions from '../Redux/MoleGameRedux'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/HomeStyles'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      speed: 1
    }
    this.increaseScore = this.increaseScore.bind(this)
    this.startGame = this.startGame.bind(this)
    this.renderMoleHoles = this.renderMoleHoles.bind(this)
  }
  componentDidMount () {
    let remainingHeight = Metrics.screenHeight - (Metrics.screenWidth / 2.08)
    this.setState({
      count: parseInt(remainingHeight/150)
    })
  }

  startGame (time) {
    this.props.startGame(time)
    setInterval(() => {
      this.props.tick()
    }, 1000)
    setTimeout(() => {
      this.setState({
        speed: 2
      })
    }, 500*time)
  }

  renderMoleHoles (n) {
    let parent = []

    for (let i = 0; i < n; i++) {
      parent.push(<View style={styles.moleArea} key={i}>
        <MoleHole size={150} increaseScore={this.increaseScore} speed={this.state.speed}/>
        {(i%2 === 0) && <MoleHole size={150} increaseScore={this.increaseScore} speed={this.state.speed} />}
      </View>)
    }

    return parent

  }

  increaseScore () {
    this.props.incrementScore()
  }

  toHHMMSS (time) {
    var seconds = Math.floor(time),
        hours = Math.floor(seconds / 3600);
    seconds -= hours*3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes*60;

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    if (hours === "00") {
      return minutes+':'+seconds
    } else {
      return hours+':'+minutes+':'+seconds;
    }
  }

  render () {
    let {
      score,
      totalTime,
      time,
      isRunning
    } = this.props.moleGame
    return (
      <View style={styles.mainContainer}>

        <Image source={Images.headerBackground} style={styles.headerBackgroundImage} />
          <View style={styles.dashboard}>
            <View style={styles.buttons}>
              <MoleButton text={score} />
              <MoleButton text={this.toHHMMSS(totalTime - time)} />
            </View>
          </View>

        {isRunning
          ?
          this.renderMoleHoles(this.state.count)
          :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {(score > 0) && <Text style={styles.scoreText}> Your Score is {score}</Text>}
            <TouchableOpacity onPress={() => this.startGame(120)}>
              <MoleButton text="Play" />
            </TouchableOpacity>
          </View>
        }

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moleGame: state.moleGame
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		incrementScore: () => dispatch(MoleGameActions.incrementScore()),
    startGame: (time) => dispatch(MoleGameActions.startGame(time)),
    tick: () => dispatch(MoleGameActions.tick())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
