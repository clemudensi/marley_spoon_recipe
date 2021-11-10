import { VFC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { recipeRouteConfigs } from '../consts';

const RecipeRoutes: VFC = memo(() => (
    <Routes>
        {
            Object.entries(recipeRouteConfigs).map(([route, {Element, authRoute}]) =>
                !authRoute
                ? <Route element={<Element/>} path={route} key={route}></Route>
                : null
            )
        }
    </Routes>
));

export { RecipeRoutes };