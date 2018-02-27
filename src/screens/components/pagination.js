import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Pagination extends Component {
  render() {
    const { currentPage, pages, goToPage } = this.props

    const pagesArray = []
    for (let i = 0; i < pages; i++) pagesArray.push(i)

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            disabled={currentPage === 0}
            onPress={() => goToPage(currentPage - 1)}
            style={styles.button}
          >
            <Ionicons name="ios-arrow-back" size={25} color="#444" />
          </TouchableOpacity>
          <ScrollView style={{ flex: 1 }} horizontal={true}>
            {pagesArray.map(page => (
              <TouchableOpacity
                onPress={() => goToPage(page)}
                key={page}
                style={[styles.pageButton, page === currentPage ? { backgroundColor: 'rgb(71, 135, 253)' } : {}]}
              >
                <Text style={page === currentPage ? { color: 'white' } : {}}>{page + 1}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            disabled={currentPage === pages - 1}
            onPress={() => goToPage(currentPage + 1)}
            style={styles.button}
          >
            <Ionicons name="ios-arrow-forward" size={25} color="#444" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#eee',
    justifyContent: 'center'
  },
  innerContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  }
})
