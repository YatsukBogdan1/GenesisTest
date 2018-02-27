import React, { Component } from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import SvgImage from 'react-native-svg-uri'

const { width } = Dimensions.get('window')

export default class UserCard extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.user.id !== this.props.user.id || nextProps.liked !== this.props.liked
  }

  render() {
    const { user, style, liked, likeUser } = this.props
    return (
      <View style={[styles.cardContainer, style ? style : {}]}>
        {user.photoCount > 1 && (
          <View style={styles.photoCount}>
            <SvgImage
              width="20"
              height="20"
              source={require('../../../assets/icons/photo.svg')}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: 'white' }}>{user.photoCount}</Text>
          </View>
        )}

        <Image source={{ uri: user.photo }} style={styles.image} />

        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <SvgImage width="20" height="20" source={require('../../../assets/icons/smile.svg')} />
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.buttonContainer} onPress={likeUser}>
            <Image
              style={{ height: 20, width: 20 }}
              source={
                liked ? require('../../../assets/icons/star.png') : require('../../../assets/icons/star_outline.png')
              }
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <View style={styles.buttonContainer}>
            <SvgImage width="20" height="20" source={require('../../../assets/icons/mail.svg')} />
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 18, color: 'rgb(71, 135, 253)' }}>
            {user.name}, {user.age}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14 }}>
            {user.city}, {user.country}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  photoCount: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    left: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 120
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: 'rgb(71, 135, 253)',
    height: 40
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  mailIcon: {
    width: 27,
    height: 21,
    resizeMode: 'stretch'
  }
})
