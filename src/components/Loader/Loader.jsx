import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderStyled>
      <Triangle
        height="100"
        width="100"
        color="#ff006e"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
}
