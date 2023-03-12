import styled from 'styled-components';

export const FavouritesPageStyled = styled.div`
  & .favourites__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    ${({ theme }) => theme.media.tablet} {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
