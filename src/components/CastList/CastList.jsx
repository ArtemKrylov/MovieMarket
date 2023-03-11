import React from 'react';

import defaultImg from '../../img/default-profile.jpg';
import CastListStyled from './CastList.styled';

export default function CastList({ data }) {
  return (
    <CastListStyled className="cast">
      <ul className="cast__list">
        {data.map(actor => {
          return (
            <li key={actor.credit_id} className="cast__item">
              {actor.profile_path ? (
                <picture className="cast__image">
                  {/* for mobile */}
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w200/${actor.profile_path} 1x, https://image.tmdb.org/t/p/w500/${actor.profile_path} 2x`}
                    media="(max-width: 767px)"
                  />
                  {/* for tablet */}
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w300/${actor.profile_path} 1x, https://image.tmdb.org/t/p/w500/${actor.profile_path} 2x`}
                    media="(max-width: 1023px)"
                  />
                  {/* for desktop */}
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w300/${actor.profile_path} 1x, https://image.tmdb.org/t/p/w500/${actor.profile_path} 2x`}
                    media="(min-width: 1024px)"
                  />
                  <img
                    src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                    alt={`${actor.name}`}
                  />
                </picture>
              ) : (
                <img
                  src={defaultImg}
                  alt={`${actor.name}`}
                  className="cast__image"
                />
              )}
              <div className="cast__info">
                <p className="cast__name">{actor.name}</p>
                <p className="cast__character">
                  <span className="cast__character-title">Character: </span>
                  {actor.character}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </CastListStyled>
  );
}
