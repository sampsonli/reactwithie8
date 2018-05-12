
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
    prefix = 'http://10.0.11.28:8768/api/evaluation'
} else {
    // prefix = 'http://10.0.11.28:8768/api/evaluation'
    prefix = ''
}
const _axios = axios.create({baseURL: prefix})
function getToken() {
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) {
        return unescape(arr[2]); 
    } else {
        return ~location.search.indexOf('token=') && location.search.split('token=')[1].split('&')[0]||sessionStorage.getItem('token')||'';
    }
    
}

export default {
    get(url) {
        let config = {
            headers: {
                timestamp: Date.now(),
                token: getToken(),
            }
        }
        if(isie89) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url: prefix + url,
                    headers: config.headers,
                    success (resp) {
                        resolve(resp)
                    },
                    error (e) {
                        reject(e)
                    }
                })
            })
        } else {
            
            return _axios.get(url, config).then(response => {
                if (response.status === 200) {
                    return response.data
                } else  {
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
        if(isie89) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url,
                    headers: config.headers,
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
           
            return _axios.post(url, data, config).then(response => {
                if (response.status === 200) {
                    return response.data
                } else  {
                    throw new Error(response.message)
                }
            }) 
        }
    }
}