import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class CityInput extends Component {
  render() {
    const { value, onChangeText, clear } = this.props

    return (
      <View style={{ marginBottom: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            underlineColorAndroid="transparent"
            style={{ flex: 1 }}
            placeholder="City"
            onChangeText={onChangeText}
            value={value}
          />
          <TouchableOpacity onPress={clear}>
            <Ionicons name="ios-close" size={40} color="rgb(71, 135, 253)" />
          </TouchableOpacity>
        </View>
        <View style={{ height: 1, backgroundColor: '#ddd' }} />
      </View>
    )
  }
}
