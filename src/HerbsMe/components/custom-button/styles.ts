import { Button } from '@material-ui/core';
import styled from 'styled-components';

 export const CustomHerbsMeButton = styled(Button)`
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
`;