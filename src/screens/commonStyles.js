import {StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../constants';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: StatusBar.currentHeight,
  },
  flex1: {
    flex: 1,
  },
  paddingH12: {paddingHorizontal: 12},
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  leftImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  backIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.transparentBlack,
  },
  fontSize10W: {color: 'white', textAlign: 'center', fontSize: 10},
  subView: {
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenter: {flex: 1, alignItems: 'center'},
  font22W: {color: 'white', fontSize: 22},
  font12W: {color: 'white', fontSize: 12},
  textCenter: {textAlign: 'center'},
  Image30: {
    height: 30,
    width: 30,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  Image6: {
    height: 10,
    width: 10,
    marginRight: 3,
  },
  visibleAudioView: {
    backgroundColor: 'rgba(225, 225, 225, 0.3)',
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
  },
  // Bottom menu styles
  bottomMenu: {
    flexDirection: 'row',
    paddingVertical: 7,
    left: 252 / 4.5,
    width: 252,
    position: 'absolute',
    bottom: 25,
    borderRadius: 100,
    backgroundColor: COLORS.themeGray,
  },
  searchIcon: {
    height: 19,
    width: 19,
  },
  profilePic: {
    height: '100%',
    width: '100%',
  },
  profileView: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },

  // audio guide
  audioMainView: {
    marginTop: 7,
    paddingVertical: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
  },
  marginB90: {
    marginBottom: 90,
  },
  tickImage: {
    height: 10,
    width: 10,
    marginLeft: 3,
  },
  Image25: {
    width: 25,
    height: 25,
  },
  Image30: {
    height: 30,
    width: 30,
    marginHorizontal: 7,
  },
});

export default styles;
