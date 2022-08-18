export default function getMovies() {
  return (dispatch) => {
    const apiKey = "e3f1a7c4ecf25f611f80d142e8fe251f";
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "GET_MOVIES_LIST",
          payload: data.results.slice(0, 12),
        })
      );
  };
}
