import styled from 'styled-components';

const TrendingListStyled = styled.ul`
  & .trending__item {
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;

    &:before {
      content: '🍿';
      position: absolute;
      top: 0;
      left: -5px;
    }
  }
`;

export default TrendingListStyled;
