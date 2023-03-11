import styled from 'styled-components';

const HeaderStyled = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.boxAccent};

  ${({ theme }) => theme.media.desktop} {
    justify-content: flex-start;
    gap: 55px;
  }

  & .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    ${({ theme }) => theme.media.tablet} {
      gap: 55px;
    }

    ${({ theme }) => theme.media.desktop} {
      gap: 45px;
      font-size: 25px;
    }

    & a {
      color: inherit;
      font-weight: 700;

      &.active {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

export default HeaderStyled;
