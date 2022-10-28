class Movies {
  api() {
    return fetch("https://reactnative.dev/movies.json").then((response) => {
      return response.json();
    });
  }
}
export default Movies;
