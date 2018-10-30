import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  headerBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: Metrics.screenWidth / 2.08
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  moleArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dashboard: {
    height: Metrics.screenWidth / 2.08
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 40
  },
  scoreText: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 26,
    marginBottom: 50
  }
})
