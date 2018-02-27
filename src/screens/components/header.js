import React, { Component } from 'react'
import { View, Platform, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import SvgImage from 'react-native-svg-uri'

export default class Header extends Component {
  render() {
    const { leftButtonOnPress } = this.props

    return (
      <View>
        {Platform.OS === 'ios' && <View style={styles.iosPadding} />}
        <View style={styles.header}>
          <TouchableOpacity onPress={leftButtonOnPress} style={[styles.icon, { left: 15 }]}>
            <Image style={styles.iconImage} source={require('../../../assets/icons/menu.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, color: 'rgb(54, 108, 247)' }}>Hello</Text>
          <TouchableOpacity style={[styles.icon, { right: 15 }]}>
            <Image style={styles.iconImage} source={require('../../../assets/icons/mail.png')} />
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
  },
  iconImage: {
    width: 30,
    height: 22,
    resizeMode: 'stretch'
  }
})
