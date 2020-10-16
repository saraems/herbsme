import React, { FC } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { useNumberFormField } from 'src/HerbsMe/hooks';
import { herbsMeActions } from 'src/HerbsMe/redux';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

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
  SubmitButton: styled(Button)`
    height: 2.25rem;
    background-color: #8fa563;
    border-radius: 4px;
    border: 0;
    padding: 0 1rem;
    font-weight: bold;
    color: white;
    margin-right: 0.5rem;
    font-family: Comfortaa;
    text-transform: lowercase;
    text-transform: capitalize;
    box-shadow: rgba(0, 0, 0, 0.25) 0px -4px inset;

    &:hover {
      background-color: #677445;
      cursor: pointer;
    }
  `,
  ClearButton: styled(Button)`
    font-family: Comfortaa;
    text-transform: lowercase;
    text-transform: capitalize;
    letter-spacing: normal;
  `,
};

const PriceFilter: FC = () => {
  const dispatch = useDispatch();
  const priceFrom = useNumberFormField(null);
  const priceTo = useNumberFormField(null);

  const setPriceRange = () => {
    dispatch(herbsMeActions.setPriceRange({ minPrice: priceFrom.value, maxPrice: priceTo.value }));
  };

  const clearPriceRange = () => {
    dispatch(herbsMeActions.clearPriceRange());
  };

  return (
    <S.FiltrWrapper>
      Price from:
      <S.ImputWrapper>
        <TextField margin="dense" id="price" type="number" {...priceFrom} />
      </S.ImputWrapper>
      to:
      <S.ImputWrapper>
        <TextField margin="dense" id="price" type="number" {...priceTo} />
      </S.ImputWrapper>
      <S.SubmitButton onClick={setPriceRange}>Implement filter</S.SubmitButton>
      <S.ClearButton variant="outlined" onClick={clearPriceRange}>
        Clear filter
      </S.ClearButton>
    </S.FiltrWrapper>
  );
};

export default PriceFilter;
