
const updateMovies = (state, value) => {
  value.map(movie => state.movies.push(movie))
}

const cleanMovies = (state) => {
  state.movies = []
}

const updateLoad = (state) => {
  state.finishLoadMovies = true
}

export default {
  updateMovies,
  cleanMovies,
  updateLoad
}
