import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons} from '../constants';
import commonStyle from '../screens/commonStyles';

const BottomMenu = () => {
  return (
    <View
      style={commonStyle.bottomMenu}>
      <TouchableOpacity style={commonStyle.flexCenter}>
        <FastImage
          source={icons.search}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyle.searchIcon}
        />
        <Text style={commonStyle.fontSize10W}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyle.flexCenter}>
        <FastImage
          source={icons.eye}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyle.searchIcon}
        />
        <Text style={commonStyle.fontSize10W}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyle.flexCenter}>
        <FastImage
          source={icons.gallery}
          resizeMode={FastImage.resizeMode.contain}
          style={commonStyle.searchIcon}
        />
        <Text style={commonStyle.fontSize10W}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyle.flexCenter}>
        <View style={commonStyle.profileView}>
          <FastImage
            source={icons.profile}
            resizeMode={FastImage.resizeMode.contain}
            style={commonStyle.profilePic}
          />
        </View>
        <Text style={commonStyle.fontSize10W}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
