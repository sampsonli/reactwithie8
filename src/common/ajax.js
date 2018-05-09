
import axios from 'axios';

const browser = navigator.appName
const b_version=navigator.appVersion 
const version=b_version.split(";"); 
const trim_Version = version[1].replace(/[ ]/g, "");
let isie89 = false
if (browser == "Microsoft Internet Explorer" && (trim_Version == "MSIE8.0" || trim_Version == "MSIE9.0")) {
    isie89 = true;
}
export default {
    get(url) {
        if(isie89) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url,
                    success (resp) {
                        resolve(resp)
                    },
                    error (e) {
                        reject(e)
                    }
                })
            })
        } else {
            return axios.get(...arguments)
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
            return axios.post(...arguments)
        }
    }
}