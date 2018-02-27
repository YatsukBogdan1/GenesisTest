import { SET_MATCHED_USERS, LIKE_USER, SET_LIKED_USERS } from './actionTypes'

const initialState = {
  matchedUsers: [],
  liked: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHED_USERS:
      return {
        ...state,
        matchedUsers: action.matchedUsers
      }
    case LIKE_USER: {
      const index = state.liked.indexOf(action.userId)
      if (index === -1) {
        return {
          ...state,
          liked: [...state.liked, action.userId]
        }
      }
      return {
        ...state,
        liked: [...state.liked.slice(0, index), ...state.liked.slice(index + 1, state.liked.length)]
      }
    }
    default:
      return state
  }
}

export default reducer
