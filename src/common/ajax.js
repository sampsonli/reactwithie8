import axios from 'axios';

const options = {
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
export default _axios;

