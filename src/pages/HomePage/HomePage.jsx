import React, { useEffect, useState } from 'react';

import { tmdb_API } from 'components/App/App';
import Section from 'components/Section';
import TrendingList from 'components/TrendingList';

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    if (trending.length > 0) return;
    async function getTrending() {
      try {
        const response = await tmdb_API.fetchTrending();
        setTrending(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section title={'Trending today'} className="section--trending">
      <TrendingList moviesList={trending} className="trending" />
    </Section>
  );
}
