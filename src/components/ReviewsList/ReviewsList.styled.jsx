import styled from 'styled-components';

const ReviewsListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 25px 0;

  ${({ theme }) => theme.media.tablet} {
  }
  & .reviews__item {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.boxAccent};
  }
  & .reviews__author {
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Tourney', cursive;
    text-shadow: ${({ theme }) => theme.shadows.fontAccent};
  }
  & .reviews__content {
    font-size: 18px;
    overflow: hidden;
  }
`;
export default ReviewsListStyled;
