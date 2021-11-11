import { VFC } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardContainer } from './styles';
import { RecipeSubTitle, RecipeTitle, TagBadge, TitleGreen } from '../primitives';
import { RecipeFields } from '../../types';
import { replaceSpaceWithHyphen, setSysId } from '../../utils';

interface IRecipeMenu
	extends Pick<
		RecipeFields,
		| 'title'
		| 'tags'
		| 'photo'
		> {
		sys: {
			id: string
		};
}

const RecipeMenuCard: VFC<IRecipeMenu> = ({
	title,
	tags,
	photo,
	sys
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
				<RecipeTitle
					href={`/menu/${replaceSpaceWithHyphen(title)}`}
					onClick={() => setSysId(sys.id)}
				>
					{title}
				</RecipeTitle>
				<RecipeSubTitle
					href={`/menu/${replaceSpaceWithHyphen(title)}`}
					onClick={() => setSysId(sys.id)}
				>
					subtitle
				</RecipeSubTitle>
				{
				tags ? tags.map((tag) => (
					<TagBadge
						key={tag.fields.name}
						href={`/menu/${replaceSpaceWithHyphen(title)}`}
						onClick={() => setSysId(sys.id)}
					>
						{tag.fields.name}
					</TagBadge>
				)) : null
			}
			</CardContent>
		</CardContainer>
	);
};

export { RecipeMenuCard };