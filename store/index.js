import axios from 'axios'

export const state = () => ({
  movies: []
})

export const getters = {
  gotMovies: (state) => {
    return state.movies.length > 0
  }
}

export const mutations = {
  updateMovies: (state, value) => {
    state.movies = value
  }
}

export const actions = {
  searchMovie: ({ commit }, value) => {
    axios.get(`https://www.omdbapi.com/?apikey=c267f60c&s=${value}`)
      .then((response) => {
        commit('updateMovies', response.data.Search)
      })
      .catch(error => console.log(error))
  }
}
