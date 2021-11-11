/* eslint-disable */
import styled from 'styled-components';
import { Container } from '@mui/material';

const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-gap: 1em;
`;

const RecipeMenuContainer = styled(Container)`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2.5)} 0;
`;

export { CardGridContainer, RecipeMenuContainer };