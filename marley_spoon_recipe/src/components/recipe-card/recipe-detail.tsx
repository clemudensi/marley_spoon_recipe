import { VFC } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardContainer } from './styles';
import {
    RecipeDetailBadge,
    RecipeDetailSubTitle,
    RecipeDetailText,
    RecipeDetailTitle
} from '../primitives';
import { RecipeFields } from '../../types';

const RecipeDetailCard: VFC<RecipeFields> = ({
  title,
  tags,
  photo,
  description
}) => {
  return (
    <CardContainer>
      <CardMedia
        component="img"
        height="500"
        image={photo?.fields?.file?.url}
      />
      <CardContent>
        <RecipeDetailTitle>
          {title}
        </RecipeDetailTitle>
        <RecipeDetailSubTitle>subtitle</RecipeDetailSubTitle>
        {
        tags ? tags.map((tag) => (
          <RecipeDetailBadge key={tag.fields.name}>
            {tag.fields.name}
          </RecipeDetailBadge>
        )) : null
      }
      <RecipeDetailText>What's cooking</RecipeDetailText>
      <p>{description}</p>
      </CardContent>
    </CardContainer>
  );
};

export { RecipeDetailCard };