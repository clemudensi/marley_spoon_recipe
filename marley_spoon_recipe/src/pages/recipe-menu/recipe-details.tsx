import { VFC } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { getRecipe } from '../../api';
import { RecipeDetailCard } from '../../components';
import { Recipe } from '../../types';
import { RecipeMenuContainer } from './styles';

const recipeTitle = window.location.pathname.split('/')[2]
const sys_id: string = localStorage.getItem('sys_id') ?? recipeTitle;

const RecipeDetails: VFC = () => {
    const { data }: UseQueryResult<Recipe[]>  = useQuery(['recipe', sys_id], () => getRecipe(sys_id));
        return (
        <>
            <RecipeMenuContainer>
                {
                    data?.map(({fields, sys}) => (
                        <RecipeDetailCard
                            key={sys.id}
                            title={fields.title}
                            tags={fields.tags}
                            photo={fields.photo}
                            description={fields.description}
                        />
                    ))
                }
            </RecipeMenuContainer>
        </>
    )
};

export { RecipeDetails }