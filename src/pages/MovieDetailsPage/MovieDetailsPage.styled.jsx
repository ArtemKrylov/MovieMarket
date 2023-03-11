import styled from 'styled-components';

const MovieDetailsPageStyled = styled.div`
  & .movieDetails__backlink-box {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    transition: color ${({ theme }) => theme.cubic};

    &:hover,
    &:hover .movieDetails__backlink,
    &:focus,
    &:focus .movieDetails__backlink {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  & .additional__title {
    text-align: center;
    margin-bottom: 10px;
  }
  & .additional__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  & .additional__navlink {
    color: ${({ theme }) => theme.colors.black};

    transition: color ${({ theme }) => theme.cubic},
      font-weight ${({ theme }) => theme.cubic};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.accent};
    }

    &.active {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 600;
    }
  }
`;
export default MovieDetailsPageStyled;
