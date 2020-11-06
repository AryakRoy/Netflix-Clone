const api_key = "a927fb6645714c1ca576793aa52d3b44";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genre=36`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genre=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genre=99`
}
export default requests;