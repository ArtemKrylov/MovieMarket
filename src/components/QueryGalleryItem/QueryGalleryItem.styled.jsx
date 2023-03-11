import styled from 'styled-components';

export const QueryGalleryItemStyled = styled.li`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.accent2};

  & .queryGalleryItem__link {
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 10px;
    font-weight: 600;
    transition: color ${({ theme }) => theme.cubic};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  & .queryGalleryItem__vote {
    margin-bottom: 5px;
    margin-left: 5px;
    font-size: 16px;
    font-style: italic;
  }

  & .queryGalleryItem__overviewBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 0 auto;
    font-size: 18px;
    padding: 5px 10px;
  }

  & .queryGalleryItem__overview {
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    font-style: italic;
  }
`;
