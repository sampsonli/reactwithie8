import axios from 'axios';
import {baseURL} from './config';
import {getToken, isIE89} from './util';


const options = {
    baseURL,
    timeout: 6000,
    retry: 5,
    retryDelay: 300,
};

const _axios = axios.create(options);
_axios.interceptors.response.use(undefined, (err) => {
    const {config} = err;
    if (!config || !config.retry) return Promise.reject(err);
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }
    config.__retryCount += 1;
    const backoff = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, config.retryDelay || 1);
    });
    return backoff.then(() => _axios(config));
});


export default {
    get(url, config = {}) {
        if (config.headers) {
            config.headers.token = getToken();
            config.headers.timestamp = Date.now();
            config.headers.sId = 1;
        } else {
            config.headers = {
                timestamp: Date.now(),
                token: getToken(),
                sId: 1,
            };
        }
        if (isIE89) {
            return new Promise((resolve, reject) => {
                url = `${url}${~url.indexOf('?') ? '&' : '?'}timestamp=${config.headers.timestamp}&token=${config.headers.token}&sId=1`
                $.ajax({
                    type: 'GET',
                    url: baseURL + url,
                    // headers: config.headers,
                    success(resp) {
                        resolve(resp);
                    },
                    error(e) {
                        if (e.statusText) {
                            const err = new Error(e.statusText);
                            err.code = e.status;
                            reject(err);
                        } else {
                            reject(e);
                        }
                    },
                });
            });
        } else {
            return _axios.get(url, config).then(response => {
                if (response.status === 200) {
                    return response.data;
                }
                throw new Error(response.message);
            });
        }
    },
    post(url, data, config = {}) {
        if (config.headers) {
            config.headers.token = getToken();
            config.headers.timestamp = Date.now();
            config.headers.sId = 1;
        } else {
            config.headers = {
                timestamp: Date.now(),
                token: getToken(),
                sId: 1,
            };
        }
        if (isIE89) {
            return new Promise((resolve, reject) => {
                url = `${url}${~url.indexOf('?') ? '&' : '?'}timestamp=${config.headers.timestamp}&token=${config.headers.token}&sId=1`;
                // eslint-disable-next-line
                $.ajax({
                    type: 'POST',
                    url: baseURL + url,
                    contentType: 'text/plain',
                    // contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(data),
                    success(resp) {
                        resolve(resp);
                    },
                    error(e) {
                        if (e.statusText) {
                            const err = new Error(e.statusText);
                            err.code = e.status
                            reject(err);
                        } else {
                            reject(e);
                        }
                    },
                });
            });
        }
        return _axios.post(url, data, config).then(response => {
            if (response.status === 200) {
                return response.data;
            }
            throw new Error(response.message);
        });
    },
};
