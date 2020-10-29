import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import { Modal } from '../Modal';
import { MovieList } from '../MovieList';
import './MovieLists.css'

const API_KEY = "a5a0fa0ff33a995f205a2d8536f65f7f";
export const MovieLists = ({ id, Heading }) => {
  const [Movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [view, setView] = useState(true);
  const [viewData, setViewData] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const MoviesData = await API.get(`/${id}?api_key=${API_KEY}&language=en-US&page=${page}`);
      console.log(MoviesData);
      setMovies([...Movies, ...MoviesData.data.results]);
    }
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  const handleView = async (id = -1) => {
    if (id !== -1) {
      const MovieData = await API.get(`/${id}?api_key=${API_KEY}&language=en-US`);
      console.log(MovieData);
      setViewData(MovieData.data)
    }
    setView(!view);
  }

  return (
    <>
      {
        Movies.length && (<div style={{ margin: "20px 0" }}>
          <h1 className="heading">{Heading}</h1>
          <div className='movies'>
            {Movies.length ? Movies.map(({ id, ...otherMovieProps }) => (
              <MovieList key={id} {...otherMovieProps} view={handleView} id={id} />
            )) : null}
          </div>
          <div className='view-more'>
            <button type="button" onClick={() => setPage(page + 1)}>View more {Heading.toLowerCase()}</button>
          </div>
        </div>)
      }
      {
        !view && <Modal show={!view} view={handleView} data={viewData} />
      }
    </>
  )
}
