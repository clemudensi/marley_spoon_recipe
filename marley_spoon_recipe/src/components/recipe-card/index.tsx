import { VFC } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardContainer } from './styles';
import { RecipeSubTitle, RecipeTitle, TagBadge, TitleGreen } from '../primitives';
import { RecipeFields } from '../../types';
import { replaceSpaceWithHyphen } from '../../utils';

const RecipeMenuCard: VFC<RecipeFields> = ({
  title,
  tags,
  photo
}) => {
  return (
    <CardContainer>
      <CardMedia
        component="img"
        height="300"
        image={photo?.fields?.file?.url}
      />
      <CardContent>
        <TitleGreen>
          Fish
        </TitleGreen>
        <RecipeTitle href={`/menu/${replaceSpaceWithHyphen(title)}`}>
          {title}
        </RecipeTitle>
        <RecipeSubTitle href={`/menu/${replaceSpaceWithHyphen(title)}`}>
          subtitle
        </RecipeSubTitle>
        {
        tags ? tags.map((tag) => (
          <TagBadge key={tag.fields.name} href={`/menu/${replaceSpaceWithHyphen(title)}`}>
            {tag.fields.name}
          </TagBadge>
        )) : null
      }
      </CardContent>
    </CardContainer>
  );
};

export { RecipeMenuCard };