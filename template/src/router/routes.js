import Security from './../views/pages/Security';
import App from './../views/pages/App';

import Login from './../views/pages/Security/Login';
import PasswordReset from './../views/pages/Security/PasswordReset';
import PasswordForget from './../views/pages/Security/PasswordForget';

const routes = [
    {
        path: '/',
        name: 'App',
        component: App,
    },
    {
        path: '/',
        name: 'Security',
        component: Security,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/password-reset',
                name: 'PasswordReset',
                component: PasswordReset,
            },
            {
                path: '/password-forget',
                name: 'PasswordForget',
                component: PasswordForget,
            }
        ]
    }
];

export default routes;
