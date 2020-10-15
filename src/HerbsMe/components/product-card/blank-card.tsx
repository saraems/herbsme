import React, { FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { herbsMeActions } from 'src/HerbsMe/redux';

const BasicCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 448px;
  width: 248px;
  padding: 1rem;
  font-family: Comfortaa;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;
  border: #ccc 1px dashed;
  color: #ccc;
  cursor: pointer;
`;

const BlankProductCard: FC = () => {
  const dispatch = useDispatch();

  const openProductDialog = () => dispatch(herbsMeActions.openProductDialog());

  return (
    <BasicCard tabIndex={0} onClick={openProductDialog}>
      + Add new product
    </BasicCard>
  );
};

export default BlankProductCard;
