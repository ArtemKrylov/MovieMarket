import React, { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { tmdb_API } from 'components/App/App';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard';
import Section from 'components/Section';
import MovieDetailsPageStyled from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState({});

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = location.state?.from.location ?? '/';

  useEffect(() => {
    async function getMovieData() {
      try {
        const response = await tmdb_API.fetchById(movieId);
        setMovieData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getMovieData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className="section--movie-details movieDetails">
      <MovieDetailsPageStyled>
        <div className="movieDetails__backlink-box">
          <RiArrowGoBackLine />
          <Link
            to={backLinkRef}
            from={location}
            className="movieDetails__backlink"
          >
            Go back
          </Link>
        </div>

        <MovieCard movieData={movieData} />
        <div className="movieDetails__additional additional">
          <h4 className="additional__title">Additional information</h4>
          <nav className="additional__nav">
            <NavLink
              to={'cast'}
              from={location}
              className="additional__navlink link"
            >
              Cast
            </NavLink>
            <NavLink
              to={'reviews'}
              from={location}
              className="additional__navlink link"
            >
              Revies
            </NavLink>
          </nav>
        </div>
      </MovieDetailsPageStyled>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
}
