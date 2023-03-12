import styled from 'styled-components';

export const FavouritesItemStyled = styled.li`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  & .favFilm__image {
    margin-bottom: 5px;
  }

  & .favFilm__info {
    padding: 10px;
  }
  & .favFilm__title {
    text-align: center;
  }
  & .favFilm__deleteBtn {
    position: absolute;
    top: 5px;
    right: 0;
    border: none;
    color: ${({ theme }) => theme.colors.accent};
    background-color: transparent;
    transition: transform ${({ theme }) => theme.cubic};

    &:hover,
    &:focus {
      transform: translate(1px, 1px);
    }
  }
`;
