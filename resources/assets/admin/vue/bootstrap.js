/*
 * Axios and default config
 *
 * */
window.axios = require('axios');

window.axios.defaults.baseURL = window.appConfig.url.api;
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  Authorization: `Bearer ${localStorage.getItem('authToken')}`,
};
