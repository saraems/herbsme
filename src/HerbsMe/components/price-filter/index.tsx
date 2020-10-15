import React, { FC } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const S = {
  FiltrWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  ImputWrapper: styled.span`
    width: 60px;
    margin: 0 1rem;
    text-align: center;
  `,
    SubmitButton: styled.button`
    height: 2.25rem;
    background-color: #8fa563;
    border-radius: 4px;
    border: 0;
    padding: 0 1rem;
    font-weight: bold;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px -4px inset;

    &:hover {
     background-color: #a7d930 ;
    }
  `
};

const PriceFilter: FC = () => {
  return (
    <S.FiltrWrapper>
      Price from:
      <S.ImputWrapper>
        <TextField margin="dense" id="price" type="number" />
      </S.ImputWrapper>
      to:
      <S.ImputWrapper>
        <TextField margin="dense" id="price" type="number" />
          </S.ImputWrapper>
          
        <S.SubmitButton>Implement filter</S.SubmitButton>

    </S.FiltrWrapper>
  );
};

export default PriceFilter;
