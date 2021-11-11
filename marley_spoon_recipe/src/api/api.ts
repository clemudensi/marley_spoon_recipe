/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createClient } from 'contentful';

const getRecipe = async () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
    });

    return (await client.getEntries({ content_type: 'recipe'})).items;
};

export { getRecipe }