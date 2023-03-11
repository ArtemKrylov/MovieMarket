import styled from 'styled-components';
const CastListStyled = styled.div`
  padding: 20px 0;
  & .cast__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    ${({ theme }) => theme.media.tablet} {
      flex-wrap: wrap;
      flex-direction: row;
    }
  }

  & .cast__item {
    width: 100%;

    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;

    ${({ theme }) => theme.media.tablet} {
      width: 300px;
    }
  }

  & .cast__image {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;

    ${({ theme }) => theme.media.tablet} {
      width: 300px;
    }

    & img {
      margin: 0;
      width: 100%;
      height: 400px;
      object-fit: cover;

      ${({ theme }) => theme.media.tablet} {
        width: 300px;
      }
    }
  }

  & .cast__info {
    padding: 10px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    text-align: center;
  }

  & .cast__name {
    font-weight: 700;
    font-family: 'Tourney', cursive;
    color: ${({ theme }) => theme.colors.accent};
  }

  & .cast__character-title {
    font-weight: 600;
  }
`;
export default CastListStyled;
