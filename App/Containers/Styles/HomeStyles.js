import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  headerBackgroundImage: {
    position: 'absolute',
    backgroundColor: 'tomato',
    width: '100%'
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
  }
})
