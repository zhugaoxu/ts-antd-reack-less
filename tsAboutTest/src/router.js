import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'dva/dynamic';





const BasicRoute = ({ history, app }) => {

    const routes = [
        {
            path: '/',
            name: 'home',
            component: () => import('./App.tsx'),
            models: () => [import('./models/index')]
        },
        {
            path: '/testOne',
            name: 'testOne',
            component: () => import('./pages/testOne'),
            models: () => [import('./models/testOne')]
        },
        {
            path: '/testTwo',
            name: 'testTwo',
            component: () => import('./pages/testTwo'),
            models: () => [import('./models/testTwo')]

        }

    ]
    return (
        <HashRouter>
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                {
                    routes.map(({ path, name, ...other }) => {
                        return (
                            <Route path={path} key={name} exact component={dynamic({ app, ...other })} />
                        )
                    })
                }

            </Switch>
        </HashRouter>
    )

}



export default BasicRoute;