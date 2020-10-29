import './App.css';
import { Header } from './components/Header';
import { MovieLists } from './components/MovieLists';

function App() {
  return (
    <>
      <Header />
      <MovieLists id='top_rated' Heading='Top Rated Movies' />
      <MovieLists id='upcoming' Heading='Upcoming Movies' />
    </>
  );
}

export default App;
