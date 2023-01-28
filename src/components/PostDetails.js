import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons} from '../constants';
import commonStyles from '../screens/commonStyles';

const PostDetails = ({extraStyle, OnClickTitle}) => {
  return (
    <View
      style={[commonStyles.postMainView, !extraStyle && commonStyles.marginB90]}>
      <Text style={commonStyles.fontSize10W}>
        #david #michelangelo #italianrenaissance #marble #sculpture
      </Text>
      <View style={commonStyles.subView}>
        <TouchableOpacity>
          <FastImage
            source={icons.heart}
            resizeMode={FastImage.resizeMode.contain}
            style={commonStyles.Image30}
          />
          <Text style={[commonStyles.font12W, commonStyles.textCenter]}>
            22.5k
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.flexCenter} onPress={OnClickTitle}>
          <Text style={commonStyles.font22W}>Bust of David (1503)</Text>
          <Text style={commonStyles.font12W}>
            by <Text style={commonStyles.fontBold}>Michelangelo</Text>
          </Text>
          <View style={[commonStyles.flexRow, commonStyles.center]}>
            <FastImage
              source={icons.map}
              resizeMode={FastImage.resizeMode.contain}
              style={commonStyles.Image6}
            />
            <Text style={commonStyles.font12W}>Private Collection</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <FastImage
            source={icons.chat}
            resizeMode={FastImage.resizeMode.contain}
            style={commonStyles.Image30}
          />
          <Text style={[commonStyles.font12W, commonStyles.textCenter]}>
            952
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostDetails;
