export default function getSeriesCategories() {
  return (dispatch) => {
    const apiKey = "e3f1a7c4ecf25f611f80d142e8fe251f";
    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "GET_SERIES_CATEGORIES", payload: data.genres })
      );
  };
}
