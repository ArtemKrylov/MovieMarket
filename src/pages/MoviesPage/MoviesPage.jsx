import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import Section from 'components/Section';
import { tmdb_API } from 'components/App/App';
import { STATUS_MACHINE } from 'utils';
import QueryGallery from 'components/QueryGallery';
import ReactPaginate from 'react-paginate';
import { MoviesPageStyled } from './MoviesPage.styled';

export default function MoviesPage() {
  const [querySearchResults, setQuerySearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1); //total pages for pagination
  const [status, setStatus] = useState(STATUS_MACHINE.IDLE); //status for QueryGallery state machine

  //searchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page') ?? 1;

  //when query changes - do fecthByQuery
  useEffect(() => {
    async function getQuerySearch(query) {
      try {
        setStatus(STATUS_MACHINE.PENDING);
        const response = await tmdb_API.fetchByQuery(query, page);
        const { results, total_pages } = response.data;
        setQuerySearchResults(results);
        setSearchParams({ query, page });
        setTotalPages(total_pages);
        // setPages(total_pages);
        setStatus(STATUS_MACHINE.RESOLVED);
      } catch (error) {
        console.error(error);
        setStatus(STATUS_MACHINE.REJECTED);
      }
    }
    if (query === null) return;
    getQuerySearch(query);
  }, [query, page, setSearchParams]);

  function handleQuery(newQuery) {
    console.log('searchParams', query, page);
    setSearchParams({ page, query: newQuery });
  }

  function handlePageClick({ selected }) {
    setSearchParams({ query, page: selected + 1 });
  }

  return (
    <Section className="section--movies">
      <MoviesPageStyled>
        <SearchForm handleQuery={handleQuery} value={query ?? ''} />

        {query && (
          <p className="searchQuery">
            <b>Search query:</b> {query}
          </p>
        )}

        <QueryGallery querySearchResults={querySearchResults} status={status} />

        {totalPages > 1 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination--movies"
          />
        )}
      </MoviesPageStyled>
    </Section>
  );
}
