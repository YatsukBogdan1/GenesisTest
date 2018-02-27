import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class SearchButton extends Component {
  render() {
    const { onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.button}>
          <Ionicons name="ios-search" size={30} color="white" />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 70,
    right: 20
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
