export default {
    clearAuth() {
        localStorage.removeItem('token');
    },

    getTokenHeader() {
        return 'Bearer ' + localStorage.getItem('token');
    },

    setAuth(token) {
        localStorage.setItem('token', token);
    },

    checkTokenAuth() {
        let jwt = localStorage.getItem('token');

        if(typeof jwt === 'string' && jwt.length > 0) {
            return true;
        }
        return false;
    }
}