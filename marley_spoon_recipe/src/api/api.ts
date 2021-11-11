/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
});

const getRecipes = async () => {
    return (await client.getEntries({ content_type: 'recipe'})).items;
};

const getRecipe = async (sys_id: string) => {
    return (await client.getEntries({
        content_type: 'recipe',
        'sys.id': sys_id
    })).items;
};

export { getRecipe, getRecipes }