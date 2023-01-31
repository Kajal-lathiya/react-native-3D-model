import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import {HeaderBar, PostDetails, BottomMenu, AudioGuide} from '../../components';
import commonStyles from '../commonStyles';
import ModelView from 'react-native-gl-model-view';
import Swiper from 'react-native-swiper';
import postData from '../../../data/dataArray.json';
import Sound from 'react-native-sound';

const AnimatedModelView = Animated.createAnimatedComponent(ModelView);
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      rotateX: new Animated.Value(-90),
      rotateZ: new Animated.Value(0),
      fromXY: undefined,
      valueXY: undefined,
      showAudioView: false,
    };
  }

  componentDidMount() {
    // Enable playback in silence mode
    Sound.setCategory('Playback');

    // Load the sound file 'whoosh.mp3' from the app bundle
    // See notes below about preloading sounds within initialization code below.
    let whoosh = new Sound('test_data.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          whoosh.getDuration() +
          'number of channels: ' +
          whoosh.getNumberOfChannels(),
      );
    });

    // Reduce the volume by half
    whoosh.setVolume(0.5);

    // Position the sound to the full right in a stereo field
    whoosh.setPan(1);

    // Loop indefinitely until stop() is called
    whoosh.setNumberOfLoops(-1);

    // Get properties of the player instance
    console.log('volume: ' + whoosh.getVolume());
    console.log('pan: ' + whoosh.getPan());
    console.log('loops: ' + whoosh.getNumberOfLoops());

    // Seek to a specific point in seconds
    whoosh.setCurrentTime(2.5);

    // Get the current playback point in seconds
    whoosh.getCurrentTime(seconds => console.log('at ' + seconds));

    // Pause the sound
    whoosh.pause();

    // Stop the sound and rewind to the beginning
    whoosh.stop(() => {
      // Note: If you want to play a sound after stopping and rewinding it,
      // it is important to call play() in a callback.
      whoosh.play();
    });

    // Release the audio player resource
    whoosh.release();
  }

  playAudio() {
    // Load the sound file 'whoosh.mp3' from the app bundle
    // See notes below about preloading sounds within initialization code below.
    let whoosh = new Sound('test_data.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          whoosh.getDuration() +
          'number of channels: ' +
          whoosh.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }
  onMoveEnd = () => {
    this.setState({
      fromXY: undefined,
    });
  };

  onMove = e => {
    let {pageX, pageY} = e.nativeEvent,
      {rotateX, rotateZ, fromXY, valueXY} = this.state;
    if (!this.state.fromXY) {
      this.setState({
        fromXY: [pageX, pageY],
        valueXY: [rotateZ.__getValue(), rotateX.__getValue()],
      });
    } else {
      rotateZ.setValue(valueXY[0] + (pageX - fromXY[0]) / 2);
      rotateX.setValue(valueXY[1] + (pageY - fromXY[1]) / 2);
    }
  };

  handleTitle = () => {
    this.setState({showAudioView: !this.state.showAudioView});
  };

  renderModel(item) {
    const {rotateZ, rotateX, fromXY, showAudioView} = this.state;
    return (
      <View style={commonStyles.flex1} key={item.id}>
        <AnimatedModelView
          model={{
            uri: 'demon.obj',
          }}
          texture={{
            uri: 'demon.png',
          }}
          onStartShouldSetResponder={() => true}
          onResponderRelease={this.onMoveEnd}
          onResponderMove={this.onMove}
          animate={!!fromXY}
          tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}} // tint color
          scale={0.01} // whole image cover
          rotateX={rotateX}
          rotateZ={rotateZ}
          translateZ={-4}
          style={commonStyles.container}
        />
        <View
          style={[
            showAudioView && commonStyles.visibleAudioView,
            commonStyles.mainView,
          ]}>
          <PostDetails
            item={item}
            extraStyle={showAudioView}
            OnClickTitle={() => this.handleTitle()}
          />
          {showAudioView && (
            <AudioGuide
              extraStyle={showAudioView}
              playAudio={() => this.playAudio()}
            />
          )}
          <BottomMenu />
        </View>
      </View>
      // <AnimatedModelView
      //   model={{
      //     uri: 'demon.model',
      //   }}
      //   texture={{
      //     uri: 'demon.png',
      //   }}
      //   tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
      //   animate
      //   scale={0.01}
      //   translateZ={-2.5}
      //   rotateX={270}
      //   rotateZ={Animated.add(this.state.rotateZ, Math.random() * 360)}
      //   style={styles.model}
      // />
    );
  }

  render() {
    return (
      <View style={commonStyles.appContainer}>
        <HeaderBar right />
        <Swiper horizontal={false} showsPagination={false} loop={false}>
          {postData.map(item => this.renderModel(item))}
        </Swiper>
      </View>
    );
  }
}
