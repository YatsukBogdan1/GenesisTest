import data from './data'

const getMatches = filters => {
  let filteredData = [...data]
  if (typeof filters !== 'undefined') {
    if (filters.age) {
      const { from, to } = filters.age
      filteredData = filteredData.filter(user => {
        if (from && to) return user.age >= from && user.age <= to
        if (from) return user.age >= from
        if (to) return user.age <= to
      })
    }

    if (filters.city) {
      filteredData = filteredData.filter(user => user.city.toLowerCase() === filters.city.trim().toLowerCase())
    }
  }
  return filteredData
}

export { getMatches }
