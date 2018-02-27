import { SET_MATCHED_USERS, LIKE_USER, SET_LIKED_USERS } from './actionTypes'

export const setMatchedUsers = matchedUsers => ({
  matchedUsers,
  type: SET_MATCHED_USERS
})

export const likeUser = userId => ({
  userId,
  type: LIKE_USER
})
