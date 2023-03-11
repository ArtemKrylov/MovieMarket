import styled from 'styled-components';

const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  padding: 30px 0;

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }

  & .movieSearch__input {
    padding: 5px 10px;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: box-shadow ${({ theme }) => theme.cubic};

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.boxAccent};
      outline: none;
    }
  }
`;

export default SearchFormStyled;
