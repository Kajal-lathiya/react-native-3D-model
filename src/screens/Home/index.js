import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';
import {HeaderBar, PostDetails, BottomMenu, AudioGuide} from '../../components';
import commonStyles from '../commonStyles';
import FastImage from 'react-native-fast-image';
import ModelView from 'react-native-gl-model-view';
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
  render() {
    let {rotateZ, rotateX, fromXY, showAudioView} = this.state;
    return (
      <View style={commonStyles.appContainer}>
        <HeaderBar right />
        <AnimatedModelView
          model={{
            uri: 'demon.model',
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
            extraStyle={showAudioView}
            OnClickTitle={() => this.handleTitle()}
          />
          {showAudioView && <AudioGuide extraStyle={showAudioView} />}
          <BottomMenu />
        </View>
      </View>
    );
  }
}
