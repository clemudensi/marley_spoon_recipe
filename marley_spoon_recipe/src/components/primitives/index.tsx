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

const RecipeDetailTitle = styled(Typography).attrs(() => ({ variant: 'h3' }))`
    font-weight: 800;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    display: block;
    padding-bottom: ${({ theme }) => theme.spacing(1)};
`;

const RecipeDetailText = styled(Typography).attrs(() => ({ variant: 'h4' }))`
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    display: block;
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
    color: #828282;
    padding-bottom: ${({ theme }) => theme.spacing(1)};
`;

const TagBadge = styled.a`
    color: #413B38;
    font-weight: 300;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
        color: #28B88D;
    };
    background-color: #E9E7E6;
    max-width: fit-content;
    padding: ${({ theme }) => theme.spacing(0.5)};
    display: inline-flex;
    margin: 1rem .5rem 2rem 0;
`;

const RecipeDetailBadge = styled.div`
    color: #413B38;
    font-weight: 300;
    font-size: 1rem;
    background-color: #E9E7E6;
    max-width: fit-content;
    padding: ${({ theme }) => theme.spacing(0.5)};
    display: inline-flex;
    margin: 1rem .5rem 2rem 0;
`;

export {
    RecipeDetailBadge,
    RecipeDetailSubTitle,
    RecipeDetailText,
    RecipeDetailTitle,
    RecipeSubTitle,
    RecipeTitle,
    TagBadge,
    TitleGreen
};