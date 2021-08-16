import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import getMovieList from './movie_list'

function App() {
  const movie_list = getMovieList();
  return (
    <main className="App">
      {movie_list && movie_list.results.map((list, idx)=><Movie movie={list} />)}
    </main>
  );
}

export default App;
