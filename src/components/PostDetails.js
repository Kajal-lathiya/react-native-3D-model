import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons} from '../constants';
import commonStyles from '../screens/commonStyles';

const PostDetails = ({extraStyle, OnClickTitle, item}) => {
  return (
    <View
      style={[commonStyles.postMainView, !extraStyle && commonStyles.marginB90]}>
      <Text style={commonStyles.fontSize10W}>
        {item?.caption}
      </Text>
      <View style={commonStyles.subView}>
        <TouchableOpacity>
          <FastImage
            source={icons.heart}
            resizeMode={FastImage.resizeMode.contain}
            style={commonStyles.Image30}
          />
          <Text style={[commonStyles.font12W, commonStyles.textCenter]}>
          {item?.likes}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.flexCenter} onPress={OnClickTitle}>
          <Text style={commonStyles.font22W}>{item?.post}</Text>
          <Text style={commonStyles.font12W}>
            by <Text style={commonStyles.fontBold}>{item?.username}</Text>
          </Text>
          <View style={[commonStyles.flexRow, commonStyles.center]}>
            <FastImage
              source={icons.map}
              resizeMode={FastImage.resizeMode.contain}
              style={commonStyles.Image6}
            />
            <Text style={commonStyles.font12W}>{item?.postLocation}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <FastImage
            source={icons.chat}
            resizeMode={FastImage.resizeMode.contain}
            style={commonStyles.Image30}
          />
          <Text style={[commonStyles.font12W, commonStyles.textCenter]}>
          {item?.followers}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostDetails;
