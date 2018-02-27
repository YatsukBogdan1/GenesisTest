import React, { Component } from 'react'
import { View, Platform, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Header extends Component {
  render() {
    const { leftButtonOnPress } = this.props

    return (
      <View>
        {Platform.OS === 'ios' && <View style={styles.iosPadding} />}
        <View style={styles.header}>
          <TouchableOpacity onPress={leftButtonOnPress} style={[styles.icon, { left: 15 }]}>
            <Ionicons name="ios-menu" color="rgb(71, 135, 253)" size={25} />
          </TouchableOpacity>
          <Text>Search</Text>
          <TouchableOpacity style={[styles.icon, { right: 15 }]}>
            <Ionicons name="ios-mail" color="rgb(71, 135, 253)" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iosPadding: {
    height: 20
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute'
    // height: 50
  }
})
