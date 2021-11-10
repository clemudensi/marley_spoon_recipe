import { VFC } from 'react';

type Route =
    '/' |
    '/menu' |
    '/menu/:title';

interface RouteConfig {
    title?: string;
    Element: VFC;
    authRoute: boolean;
}

export type { Route, RouteConfig };