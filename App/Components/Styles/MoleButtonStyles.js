import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    width: 160,
    height: 50
  },
  buttonImage: {
    width: 160,
    height: 50,
    position: 'absolute',
    top: 0,
    bottom: 0
  },
  buttonText: {
    fontSize: 26,
    textAlign: 'center',
    lineHeight: 44,
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    fontWeight: "900",
    color: Colors.panther
  }
})
