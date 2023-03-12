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
      font-family: 'Tourney', cursive;

      &.active {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  & .auth-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

    & .auth-panel__login-icon {
      transition: color ${({ theme }) => theme.cubic},
        transform ${({ theme }) => theme.cubic};
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.accent};
        transform: translate(0px, 1px);
      }
    }

    & .auth-panel__loggedBlock {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
`;

export default HeaderStyled;
