import styled from 'styled-components';

export const MoviesPageStyled = styled.div`
  & .movies__searchQuery,
  & .movies__page {
    margin-bottom: 15px;
    text-align: center;
  }

  & .pagination--movies {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    padding: 20px 10px;

    & li {
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.colors.accent2};
      border-radius: ${({ theme }) => theme.borderRadius};
      cursor: pointer;

      &.disabled {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        border: 0;
        clip: rect(0 0 0 0);
      }

      &.selected {
        padding: 7px;
        background-color: ${({ theme }) => theme.colors.accent2};
        color: ${({ theme }) => theme.colors.white};
      }

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.accent2};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
