
import axios from 'axios';
import { ajaxbaseurl } from './config';
import {getToken} from './util';

const browser = navigator.appName
const b_version = navigator.appVersion
const version = b_version.split(";");
const trim_Version = version[1].replace(/[ ]/g, "");
let isie89 = false
if (browser == "Microsoft Internet Explorer" && (trim_Version == "MSIE8.0" || trim_Version == "MSIE9.0")) {
    isie89 = true;
}

const _axios = axios.create({ baseURL: ajaxbaseurl })


export default {
    get(url) {
        let config = {
            headers: {
                timestamp: Date.now(),
                token: getToken(),
            }
        }
        if (isie89) {
            return new Promise((resolve, reject) => {
                url = `${url}${~url.indexOf('?')?'&':'?'}timestamp=${config.headers.timestamp}&token=${config.headers.token}`
                jQuery.support.cors = true;
                $.ajax({
                    type: 'GET',
                    url: ajaxbaseurl + url,
                    headers: config.headers,
                    success(resp) {
                        resolve(resp)
                    },
                    error(e) {
                        reject(e)
                    }
                })
            })
        } else {

            return _axios.get(url, config).then(response => {
                if (response.status === 200) {
                    return response.data
                } else {
                    throw new Error(response.message)
                }
            })
        }
    },
    post(url, data) {
        let config = {
            headers: {
                timestamp: Date.now(),
                token: getToken(),
            }
        }
        if (isie89) {
            return new Promise((resolve, reject) => {
                url = `${url}${~url.indexOf('?') ? '&' : '?'}timestamp=${config.headers.timestamp}&token=${config.headers.token}`
                jQuery.support.cors = true;
                $.ajax({
                    type: 'POST',
                    url: ajaxbaseurl + url,
                    contentType: 'text/plain',
                    // contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(data),
                    success(resp) {
                        resolve(resp)
                    },
                    error(e) {
                        reject(e)
                    }
                })
            })
        } else {

            return _axios.post(url, data, config).then(response => {
                if (response.status === 200) {
                    return response.data
                } else {
                    throw new Error(response.message)
                }
            })
        }
    }
}