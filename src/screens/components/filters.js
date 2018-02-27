import React, { Component } from 'react'
import {
  View,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  KeyboardAvoidingView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CityInput from './cityInput'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

export default class Filters extends Component {
  render() {
    const { close, visible, city, age, onChangeCityText, onAgeValuesChange, clearCity, findNewUsers } = this.props

    return (
      <Modal onRequestClose={close} animationType="slide" visible={visible} transparent={true} style={styles.modal}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback onPress={close}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
          <View style={styles.filtersContainer}>
            <Text style={styles.label}>I am looking for</Text>
            <CityInput value={city} onChangeText={onChangeCityText} clear={clearCity} />
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginTop: 10, marginBottom: 20 }}>
                Age: {age[0]} - {age[1]}
              </Text>
              <MultiSlider values={age} onValuesChange={onAgeValuesChange} min={18} max={70} />
            </View>
          </View>
          <TouchableOpacity onPress={findNewUsers} style={styles.findButton}>
            <Text style={styles.findButtonText}>FIND</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  filtersContainer: {
    // height: 200,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end'
  },
  modal: {
    justifyContent: 'flex-end',
    flex: 1
  },
  label: {
    marginVertical: 20,
    textAlign: 'center'
  },
  findButton: {
    height: 50,
    backgroundColor: 'rgb(71, 135, 253)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  findButtonText: {
    color: 'white',
    fontSize: 25
  }
})
