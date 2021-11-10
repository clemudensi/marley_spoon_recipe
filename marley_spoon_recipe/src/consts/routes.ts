import { Route, RouteConfig } from '../types/routes';

import {
    RecipeDetails,
    RecipeMenu
} from '../pages';

const recipeRouteConfigs: Record<Route, RouteConfig> = {
    '/': {
        title: 'Deliveries',
        Element: RecipeMenu,
        authRoute: false,
    },
    '/menu': {
        title: 'Deliveries',
        Element: RecipeMenu,
        authRoute: false,
    },
    '/menu/:title': {
        title: 'History',
        Element: RecipeDetails,
        authRoute: false,
    }
};

export { recipeRouteConfigs };