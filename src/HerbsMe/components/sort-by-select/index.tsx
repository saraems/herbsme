import React, { FC } from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { ProductAccessor } from 'src/HerbsMe/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductsListAccessor } from 'src/HerbsMe/redux/selectors';
import { herbsMeActions } from 'src/HerbsMe/redux';

const S = {
  SortByWrapper: styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: flex-start;
  `,
  SelectLabel: styled(InputLabel)`
    margin-right: 1rem;
  `,
};

const SortBySelect: FC = () => {
    const dispatch = useDispatch();
    const accessor = useSelector(selectProductsListAccessor);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      dispatch(herbsMeActions.sortProducts(event.target.value as ProductAccessor))
    };
    
  return (
    <S.SortByWrapper>
      <S.SelectLabel id="demo-simple-select-label">Sort by: </S.SelectLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={accessor} onChange={handleChange}>
        <MenuItem value={ProductAccessor.name}>Name</MenuItem>
        <MenuItem value={ProductAccessor.price}>Price</MenuItem>
        <MenuItem value={ProductAccessor.categoty}>Categoty</MenuItem>
        <MenuItem value={ProductAccessor.origin}>Region of origin</MenuItem>
        <MenuItem value={ProductAccessor.harvested}>Harvest year</MenuItem>
        <MenuItem value={ProductAccessor.healingProperties}>Healing properties</MenuItem>
      </Select>
    </S.SortByWrapper>
  );
};

export default SortBySelect;



