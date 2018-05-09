
import axios from 'axios';

const browser = navigator.appName
const b_version=navigator.appVersion 
const version=b_version.split(";"); 
const trim_Version = version[1].replace(/[ ]/g, "");
let isie89 = false
if (browser == "Microsoft Internet Explorer" && (trim_Version == "MSIE8.0" || trim_Version == "MSIE9.0")) {
    isie89 = true;
}


let prefix;
if (process.env.NODE_ENV === 'production') {
    prefix = 'http://172.16.211.87:8701'
} else {
    prefix = 'http://172.16.211.87:8701'
}
const _axios = axios.create({baseURL: prefix})


export default {
    get(url) {
        if(isie89) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url: prefix + url,
                    success (resp) {
                        resolve(resp)
                    },
                    error (e) {
                        reject(e)
                    }
                })
            })
        } else {
            return _axios.get(...arguments).then(response => {
                if (response.status === 200) {
                    return response.data
                } else  {
                    throw new Error(response.message)
                }
            }) 
        }
    },
    post(url, data) {
        if(isie89) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url,
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success (resp) {
                        resolve(resp)
                    },
                    error (e) {
                        reject(e)
                    }
                })
            })
        } else {
            return _axios.post(...arguments).then(response => {
                if (response.status === 200) {
                    return response.data
                } else  {
                    throw new Error(response.message)
                }
            }) 
        }
    }
}