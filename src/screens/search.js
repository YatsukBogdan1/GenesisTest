import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getMatches } from '../api/api'
import { setMatchedUsers, likeUser, setLikedUsers } from '../actions'
import Header from './components/header'
import SearchButton from './components/searchButton'
import Filters from './components/filters'
import Ionicons from '@expo/vector-icons/Ionicons'
import Pagination from './components/pagination'
import UserCard from './components/userCard'

class Search extends Component {
  static navigationOptions = ({ navigation: { state: { params } } }) => ({
    drawerLabel: 'SEARCH',
    drawerIcon: () => <Ionicons size={30} name="ios-search" color="rgb(71, 135, 253)" />,
    drawerLockMode: params && params.swipeLocked ? 'locked-closed' : 'locked-opened'
  })

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      filtersVisible: false,
      currentPage: 0,
      pages: 1,
      city: '',
      age: [18, 32]
    }
  }

  componentDidMount() {
    this.fetchData({ age: { from: 18, to: 70 }, page: 0 })
  }

  openFilters = () => {
    this.setState({ filtersVisible: true })
    this.props.navigation.setParams({ swipeLocked: true })
  }

  closeFilters = () => {
    this.setState({ filtersVisible: false })
    this.props.navigation.setParams({ swipeLocked: false })
  }

  fetchData = filterObject => {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        const matches = getMatches(filterObject)
        this.props.setMatchedUsers(matches)
        this.setState({
          loading: false,
          pages: Math.floor(matches.length / 10) + 1
        })
      }, 2000)
    })
  }

  findNewUsers = () => {
    const { age, city } = this.state
    const filterObj = {}
    filterObj.age = {
      from: age[0],
      to: age[1]
    }
    if (city.length !== 0) {
      filterObj.city = city
    }
    this.fetchData(filterObj)
    this.setState({ filtersVisible: false })
  }

  goToPage = number => {
    this.setState({ currentPage: number })
  }

  renderContent() {
    const { loading, currentPage, pages } = this.state
    const { matchedUsers, liked } = this.props

    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    if (matchedUsers.length == 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text>No matches found</Text>
        </View>
      )
    }

    const matchedUsersOnPage = matchedUsers.slice(currentPage * 10, currentPage * 10 + 10)

    const usersGrid = []
    let lackOfUsers = false
    for (let i = 0; i < 5; i++) {
      if (typeof matchedUsersOnPage[i * 2] === 'undefined') lackOfUsers = true
      if (lackOfUsers) break

      usersGrid.push([])
      for (let j = 0; j < 2; j++) {
        if (typeof matchedUsersOnPage[i * 2 + j] !== 'undefined') {
          usersGrid[i].push(matchedUsersOnPage[i * 2 + j])
        } else {
          lackOfUsers = true
          break
        }
      }
    }
    return (
      <ScrollView style={styles.scroll}>
        <View style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
          {usersGrid.map(usersRow => (
            <View style={{ flexDirection: 'row', marginBottom: 20 }} key={usersRow[0].id}>
              <UserCard
                user={usersRow[0]}
                liked={liked.includes(usersRow[0].id)}
                likeUser={() => this.props.likeUser(usersRow[0].id)}
                style={{ marginRight: 10, flex: 1 }}
              />
              {usersRow[1] ? (
                <UserCard
                  style={{ flex: 1 }}
                  user={usersRow[1]}
                  liked={liked.includes(usersRow[1].id)}
                  likeUser={() => this.props.likeUser(usersRow[1].id)}
                />
              ) : (
                false
              )}
            </View>
          ))}
        </View>
        <Pagination currentPage={currentPage} pages={pages} goToPage={this.goToPage} />
      </ScrollView>
    )
  }

  render() {
    const { navigation: { navigate } } = this.props
    const { filtersVisible, age, city, currentPage, pages } = this.state
    return (
      <View style={{ flex: 1 }}>
        <Header leftButtonOnPress={() => navigate('DrawerOpen')} />

        {this.renderContent()}

        <Filters
          age={age}
          city={city}
          visible={filtersVisible}
          close={this.closeFilters}
          onChangeCityText={city => this.setState({ city })}
          clearCity={() => this.setState({ city: '' })}
          onAgeValuesChange={age => this.setState({ age })}
          findNewUsers={this.findNewUsers}
        />
        <SearchButton onPress={this.openFilters} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroll: {
    flex: 1,
    backgroundColor: '#eee'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = ({ matchedUsers, liked }) => ({ matchedUsers, liked })
const mapDispatchToProps = { setMatchedUsers, likeUser }

export default connect(mapStateToProps, mapDispatchToProps)(Search)
