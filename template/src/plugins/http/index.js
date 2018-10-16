import Vue from 'vue';
import auth from './../auth';
import router from './../../router';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = process.env.NODE_ENV === 'production' ? '/' : 'http://127.0.0.1:8000';
Vue.http.interceptors.push(function(request, next) {
    if(
        !(request.url === 'api/account' && request.method === 'POST')
        && !(request.url === 'api/account/password' && request.method === 'DELETE')
        && !(request.url === 'api/account/account/password' && request.method === 'POST')
    ) {
        request.headers.set('Authorization', auth.getTokenHeader());
    }

    if(request.url !== '/api/login_check' && request.url !== 'api/token') {
        next((response) => {
           if(response.status === 401) {
               auth.clearAuth();
               router.push('/login');
           }
        });
    } else {
        next();
    }
});
