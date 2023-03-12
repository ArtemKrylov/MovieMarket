import styled from 'styled-components';

export const FavouritesItemStyled = styled.li`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  ${({ theme }) => theme.media.tablet} {
    width: 250px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 300px;
  }

  & .favFilm__image {
    width: 100%;
    margin-bottom: 5px;
  }

  & .favFilm__info {
    padding: 10px;
    height: 60px;
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
