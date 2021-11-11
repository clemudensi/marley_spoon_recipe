/* eslint-disable */
import styled from 'styled-components';
import { Typography } from '@mui/material';

const TitleGreen = styled.div`
    color: #28B88D;
    font-weight: 900;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    font-size: 1rem;
    text-transform: uppercase;
`;

const RecipeTitle = styled.a`
    color: #413B38;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    line-height: 1.3;
    font-size: 1.375rem;
    display: block;
    text-decoration: none;
    &:hover {
        color: #28B88D;
    };
`;

const RecipeSubTitle = styled.a`
    color: #413B38;
    font-weight: 300;
    font-size: 0.875rem;
    text-decoration: none;
    color: #716D6A;
    display: block;
    &:hover {
        color: #28B88D;
    }
`;

const RecipeDetailSubTitle = styled(Typography).attrs(() => ({ variant: 'h4' }))`
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    line-height: 1.3;
    color: #E9E7E6;
`;

const TagBadge = styled.a`
    color: #413B38;
    font-weight: 300;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
        color: #28B88D;
    };
    background-color: #e9e7e6;
    max-width: fit-content;
    padding: ${({ theme }) => theme.spacing(0.5)};
    display: inline-flex;
    margin: 1rem .5rem 0 0
;
`;

export {
    RecipeDetailSubTitle,
    RecipeSubTitle,
    RecipeTitle,
    TagBadge,
    TitleGreen
};