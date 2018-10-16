import Vue from 'vue';
import moment from 'moment';

moment.locale('de');

Vue.prototype.arrayIndexObject = function (array, closure) {
    const item = array.find(closure);
    return array.indexOf(item);
};

Vue.filter('dateFormat', function (value, format) {
    return moment(value).format(format);
});
