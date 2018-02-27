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
  KeyboardAvoidingView,
  Animated,
  Dimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CityInput from './cityInput'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const { height, width } = Dimensions.get('window')
export default class Filters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: new Animated.Value(0),
      barBottom: new Animated.Value(-500)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible && !nextProps.visible) this.close()
    if (!this.props.visible && nextProps.visible) this.open()
  }

  open = () => {
    Animated.parallel([
      Animated.timing(this.state.opacity, { toValue: 1, duration: 300 }),
      Animated.timing(this.state.barBottom, { toValue: 0, duration: 300 })
    ]).start()
  }

  close = () => {
    Animated.parallel([
      Animated.timing(this.state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(this.state.barBottom, { toValue: -500, duration: 300 })
    ]).start(() => this.props.close())
  }

  render() {
    const { visible, city, age, onChangeCityText, onAgeValuesChange, clearCity, findNewUsers } = this.props
    if (!visible) return false
    return (
      <KeyboardAvoidingView style={{ height, width, position: 'absolute', zIndex: 2 }} behavior="padding">
        <Animated.View style={{ flex: 1, opacity: this.state.opacity, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <TouchableWithoutFeedback onPress={this.close}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
        </Animated.View>
        <Animated.View style={{ zIndex: 2, position: 'absolute', width, bottom: this.state.barBottom }}>
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
        </Animated.View>
      </KeyboardAvoidingView>
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
