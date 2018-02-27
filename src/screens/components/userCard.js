import React, { Component } from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const { width } = Dimensions.get('window')
const CARD_WIDTH = width / 2 - 20

export default class UserCard extends Component {
  render() {
    const { user, style, liked, likeUser } = this.props
    return (
      <View style={[styles.cardContainer, style ? style : {}]}>
        {user.photoCount > 1 && (
          <View style={styles.photoCount}>
            <Ionicons name="ios-camera" size={20} style={{ marginRight: 5 }} color="white" />
            <Text style={{ color: 'white' }}>{user.photoCount}</Text>
          </View>
        )}

        <Image source={{ uri: user.photo }} style={styles.image} />

        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <Ionicons name="ios-happy-outline" color="white" size={25} />
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.buttonContainer} onPress={likeUser}>
            <Ionicons name={liked ? 'ios-star' : 'ios-star-outline'} color="white" size={25} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <View style={styles.buttonContainer}>
            <Ionicons name="ios-mail-outline" color="white" size={25} />
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 16, color: 'rgb(71, 135, 253)' }}>
            {user.name}, {user.age}
          </Text>
          <Text style={{ fontSize: 14 }}>
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
    width: CARD_WIDTH,
    backgroundColor: 'white'
  },
  photoCount: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    left: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_WIDTH
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
  }
})
