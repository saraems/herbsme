import React, { FC } from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
  const [category, setCategory] = React.useState('name');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <S.SortByWrapper>
      <S.SelectLabel id="demo-simple-select-label">Sort by: </S.SelectLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} onChange={handleChange}>
        <MenuItem value={'name'}>Name</MenuItem>
        <MenuItem value={'price'}>Price</MenuItem>
        <MenuItem value={'categoty'}>Categoty</MenuItem>
        <MenuItem value={'origin'}>Region of origin</MenuItem>
        <MenuItem value={'harvested'}>Harvest date</MenuItem>
        <MenuItem value={'healingProperties'}>Healing properties</MenuItem>
      </Select>
    </S.SortByWrapper>
  );
};

export default SortBySelect;
