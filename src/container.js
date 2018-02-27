import React from 'react'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import Search from './screens/search'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'

const Navigator = DrawerNavigator(
  {
    search: Search
  },
  {
    initialRouteName: 'search',
    tintColor: 'red',
    contentComponent: props => (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://avatars0.githubusercontent.com/u/9664876?s=400&v=4' }}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.userName}>Bogdan, 21</Text>
            <Text style={styles.userLocation}>Kyiv, Ukraine</Text>
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <DrawerItems {...props} />
        </ScrollView>
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  userInfo: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15
  },
  userName: {
    color: 'rgb(71, 135, 253)',
    fontSize: 17
  },
  userLocation: {
    fontSize: 15
  }
})

export default Navigator
