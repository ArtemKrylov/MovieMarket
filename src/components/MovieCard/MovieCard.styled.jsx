import styled from 'styled-components';

const MovieCardStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }

  & .moviecard__image {
    width: 100%;
  }
  & .moviecard__title {
    margin-bottom: 15px;

    font-weight: bold;
    font-size: 22px;
  }

  & .moviecard__votes,
  & .moviecard__overview {
    margin-bottom: 15px;

    font-size: 18px;
  }

  & .moviecard__genres {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    font-size: 18px;
  }

  & .moviecard__subtitle {
    margin-bottom: 10px;

    font-weight: bold;
    font-size: 20px;
  }
`;

export default MovieCardStyled;
