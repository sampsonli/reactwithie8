
export function parseQueryString(url) {
    var reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arr_url = reg_url.exec(url),
        ret = {};
    if (arr_url && arr_url[1]) {
        var str_para = arr_url[1], result;
        while ((result = reg_para.exec(str_para)) != null) {
            ret[result[1]] = result[2];
        }
    }
    return ret;
}


export const isIE89 = (() => {
    const browser = navigator.appName
    const b_version = navigator.appVersion
    const version = b_version.split(";");
    const trim_Version = version[1].replace(/[ ]/g, "");
    let isie89 = false
    if (browser == "Microsoft Internet Explorer" && (trim_Version == "MSIE8.0" || trim_Version == "MSIE9.0")) {
        isie89 = true;
    }
})()

export function getToken() {
    if (~location.hash.indexOf('token=')) {
        return location.hash.split('token=')[1].split('&')[0]
    } else {
        let arr, reg = new RegExp("(^| )" + 'tk' + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
    }

}
