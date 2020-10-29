import React from "react";
import "./Modal.css";
import sample from '../../assets/sample.png'

export const Modal = ({ show, view, data }) => {
  console.log(data);
  const {
    budget,
    original_title,
    overview,
    poster_path,
    runtime,
    release_date,
    genres,
    tagline,
  } = data;
  return (
    <>
      {show && (
        <div className="overlay">
          <div className="modal">
            <button
              className="modal-close"
              type="button"
              onClick={() => view()}
            >
              X
            </button>
            <div className="modal-body">
              <div className="">
                <div className="movie-details">
                  <div className="poster">
                    <img
                      src={poster_path ? `https://image.tmdb.org/t/p/w1280/${poster_path}` : sample}
                      alt="Movie poster"
                    ></img>
                  </div>
                  <div className='details'>
                    <h1>{original_title}</h1>
                    <p>
                      {release_date} -{" "}
                      {genres.map(
                        (genre, id) =>
                          `${genre.name}${id + 1 === genres.length ? "" : ","}`
                      )}
                      -
                       {`${Math.floor(runtime / 60) === 0
                        ? "0"
                        : Math.floor(runtime / 60)
                        }h${runtime % 60 === 0 ? 0 : runtime % 60}m`}
                    </p>
                    <p>Budget - {budget === 0 ? 'No  Information' : budget}</p>
                    <p>Tagline: {tagline === '' ? 'No  Information' : tagline}</p>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
