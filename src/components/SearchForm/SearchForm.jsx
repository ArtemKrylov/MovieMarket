import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import { Button, Input } from 'components/App/App.styled';
import { isStringEmpty } from 'utils';
import SearchFormStyled from './SearchFrom.styled';

export default function SearchForm({ handleQuery }) {
  function handleSearchFormSubmit(evt) {
    evt.preventDefault();
    const input = evt.target.elements.queryInput.value;
    if (isStringEmpty(input)) {
      toast.error('Empty query! Please write something!');
      evt.target.reset();
      return;
    }
    handleQuery(input);
    evt.target.reset();
  }

  return (
    <SearchFormStyled
      name="movieSearch"
      className="movieSearch"
      onSubmit={handleSearchFormSubmit}
    >
      <Input
        type="text"
        name="queryInput"
        className="movieSearch__input"
        required
        autoFocus
        autoComplete="off"
      />
      <Button type="submit" className="movieSearch__submit">
        Search
      </Button>
    </SearchFormStyled>
  );
}
SearchForm.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
