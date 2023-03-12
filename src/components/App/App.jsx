import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import TMDB_API from 'API/TMDB_API';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import SharedLayout from 'components/SharedLayout';
import { GlobalStyle } from '../GlobalStyle';

//Code splitting
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

//API
export const tmdb_API = new TMDB_API();

export default function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Routes>
        <Route path={`/`} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>

      <div>
        <Toaster />
      </div>
    </div>
  );
}
