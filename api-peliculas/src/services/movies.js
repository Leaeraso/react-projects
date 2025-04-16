const API_KEY = '5586e675'
const API_URL = `https://www.omdbapi.com/`

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
    const data = await response.json()

    const movies = data.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }))
  } catch (error) {
    console.error(error)
    throw new Error('Error searching movies')
  }
}
