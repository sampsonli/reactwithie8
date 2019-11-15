import {loginUrl} from './config';

export function parseQueryString(url) {
    const reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arr_url = reg_url.exec(url),
        ret = {};
    if (arr_url && arr_url[1]) {
        let str_para = arr_url[1],
            result;
        while ((result = reg_para.exec(str_para)) != null) {
            ret[result[1]] = result[2];
        }
    }
    return ret;
}


export const isIE89 = (() => {
    try {
        const browser = navigator.appName;
        const b_version = navigator.appVersion;
        const version = b_version.split(';');
        const trim_Version = version[1].replace(/[ ]/g, '');
        let isie89 = false;
        if (browser == 'Microsoft Internet Explorer' && (trim_Version == 'MSIE8.0' || trim_Version == 'MSIE9.0')) {
            isie89 = true;
        }
        return isie89;
    } catch (e) {
        return false;
    }
})();

export function getToken() {
    let token = '';
    if (~window.location.hash.indexOf('token=')) {
        // eslint-disable-next-line prefer-destructuring
        token = window.location.hash.split('token=')[1].split('&')[0];
    }
    if (!token) {
        let arr;
        const reg = new RegExp('(^| )tk=([^;]*)(;|$)');
        // eslint-disable-next-line
        if (arr = document.cookie.match(reg)) {
            token = unescape(arr[2]);
        }
    }
    if (!token) {
        let arr;
        const reg = new RegExp('(^| )token=([^;]*)(;|$)');
        // eslint-disable-next-line
        if (arr = document.cookie.match(reg)) {
            token = unescape(arr[2]);
        }
    }
    return token;
}


export function jumpLogin() {
    if (window.mstJsBridge && window.mstJsBridge.isInMstApp()) {
        alert('您已下线');
        window.mstJsBridge.closeWebview();
        return;
    }
    let {href} = window.location;
    if (~href.indexOf('&token=')) {
        [href] = href.split('&token=');
    }
    window.location.href = `${loginUrl}&fromurl=${encodeURIComponent(href)}`;
}

export function processError(info) {
    if (info.code === '2001106') {
        return jumpLogin();
    }
    const e = new Error(info.msg);
    e.code = info.code;
    throw e;
}

