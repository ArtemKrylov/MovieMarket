import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import Section from 'components/Section';
import { tmdb_API } from 'components/App/App';
import { scrollToTop, STATUS_MACHINE } from 'utils';
import QueryGallery from 'components/QueryGallery';
import ReactPaginate from 'react-paginate';
import { MoviesPageStyled } from './MoviesPage.styled';
import { toast } from 'react-hot-toast';

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
    setSearchParams(prev => {
      if (prev.get(`query`) === newQuery) {
        toast.error('The same query! Please try a different one!');
        return prev;
      }
      return { page, query: newQuery };
    });
  }

  function handlePageClick({ selected }) {
    setSearchParams({ query, page: selected + 1 });
    scrollToTop();
  }

  return (
    <Section className="section--movies movies">
      <MoviesPageStyled>
        <SearchForm handleQuery={handleQuery} value={query ?? ''} />

        {query && (
          <p className="movies__searchQuery">
            <b>Search query:</b> {query}
          </p>
        )}
        {page > 1 && (
          <p className="movies__page">
            <b>Page: </b>
            {page}
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
            forcePage={page - 1}
          />
        )}
      </MoviesPageStyled>
    </Section>
  );
}
