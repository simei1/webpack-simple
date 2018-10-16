import Security from './../views/pages/Security';
import App from './../views/pages/App';

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
    }
];

export default routes;
