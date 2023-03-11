import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderStyled>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
}
