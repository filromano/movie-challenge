import axios from 'axios'

const api = process.env.baseUrl + process.env.APIToken

const searchMovie = ({ commit, dispatch }, name) => {
  axios.get(`${api}&type=movie&s=${name}`)
    .then((response) => {
      commit('cleanMovies')
      const pages = Math.ceil(response.data.totalResults / 10)
      dispatch('getAllMovies', { pages, name })
    })
    .catch(erro => window.$nuxt.error({ message: 'Estamos com um problema no servidor' }))
}

const getAllMovies = ({ commit }, value) => {
  for (let i = 0; i < value.pages; i++) {
    axios.get(`${api}&page=${i + 1}&type=movie&s=${value.name}`)
      .then((response) => {
        commit('updateMovies', response.data.Search)
        if (i === value.pages - 1) {
          commit('updateLoad')
        }
      })
      .catch(erro => window.$nuxt.error({ message: 'Estamos com um problema no servidor' }))
  }
}

const getMovieDetails = async (commit, imdbID) => {
  try {
    const { data } = await axios.get(`${api}&i=${imdbID}`)
    return data
  } catch (error) {
    return { message: 'Estamos com um problema no servidor' }
  }
}

export default {
  searchMovie,
  getAllMovies,
  getMovieDetails
}
