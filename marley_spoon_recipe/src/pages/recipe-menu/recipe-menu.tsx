import { VFC } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { RecipeMenuCard } from '../../components'
import { getRecipe } from '../../api';
import { CardGridContainer, RecipeMenuContainer } from './styles';
import { Recipe } from '../../types';

const RecipeMenu: VFC = () => {
    const { data }: UseQueryResult<Recipe[]> = useQuery('recipe', getRecipe);
    return (
        <>
            <RecipeMenuContainer>
                <CardGridContainer>
                    {
                        data?.map(({fields, sys}) => (
                            <RecipeMenuCard
                                key={sys.id}
                                title={fields.title}
                                tags={fields.tags}
                                photo={fields.photo}
                            />
                        ))
                    }
                </CardGridContainer>
            </RecipeMenuContainer>
        </>
    )
};

export { RecipeMenu }