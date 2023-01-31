import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons} from '../constants';
import commonStyles from '../screens/commonStyles';

const AudioGuide = ({extraStyle, playAudio}) => {
  return (
    <View
      style={[
        commonStyles.audioMainView,
        extraStyle && commonStyles.marginB90,
      ]}>
      <View style={[commonStyles.flexRow, commonStyles.center]}>
        <FastImage
          source={icons.backward}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyles.Image25}
        />
        <TouchableOpacity onPress={playAudio}>
        <FastImage
          source={icons.playCircle}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyles.Image30}
          />
        </TouchableOpacity>
        <FastImage
          source={icons.forward}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyles.Image25}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 3,
          marginHorizontal: 30,
          marginVertical: 7,
        }}
      />
      <View style={[commonStyles.flexRow, commonStyles.center]}>
        <FastImage
          source={icons.hospital}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyles.Image6}
        />
        <Text style={commonStyles.font12W}>The National Gallery</Text>
        <FastImage
          source={icons.tick}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyles.tickImage}
        />
      </View>
    </View>
  );
};

export default AudioGuide;
