import styled from 'styled-components';

const QueryGalleryStyled = styled.div`
  &.queryGallery--idle,
  &.queryGallery--rejected,
  &.queryGallery--pending,
  &.queryGallery--nothingFound {
    padding: 30px 0;
    text-align: center;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
  }

  & .queryGallery__list {
    display: flex;

    justify-content: center;
    flex-direction: column;
    gap: 25px;
  }
`;

export default QueryGalleryStyled;
