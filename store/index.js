import axios from 'axios'

export const state = () => ({
  movies: [],
  pages: []
})

export const getters = {
  gotMovies: (state) => {
    return state.movies.length > 0
  }
}

export const mutations = {
  updateMovies: (state, value) => {
    value.map(movie => state.movies.push(movie))
  },
  cleanMovies: (state) => {
    state.movies = []
  },
  paginateMovies: (state) => {
    const chunk = 6
    let temporaryArray
    for (let i = 0; i < state.movies.length; i += chunk) {
      temporaryArray = state.movies.slice(i, i + chunk)
      state.pages.push(temporaryArray)
    }
  }
}

export const actions = {
  searchMovie: ({ commit, dispatch }, name) => {
    axios.get(`https://www.omdbapi.com/?apikey=c267f60c&type=movie&s=${name}`)
      .then((response) => {
        commit('cleanMovies')
        const pages = Math.ceil(response.data.totalResults / 10)
        dispatch('getAllMovies', { pages, name })
      })
      .catch(error => console.log(error))
  },
  getAllMovies: ({ commit }, value) => {
    for (let i = 0; i < value.pages; i++) {
      axios.get(`https://www.omdbapi.com/?apikey=c267f60c&page=${i + 1}&type=movie&s=${value.name}`)
        .then((response) => {
          commit('updateMovies', response.data.Search)
          if (i === value.pages - 1) {
            commit('paginateMovies')
          }
        })
        .catch(error => console.log(error))
    }
  }
}
