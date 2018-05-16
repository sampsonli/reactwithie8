
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


export function getToken() {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return ~location.hash.indexOf('token=') && location.hash.split('token=')[1].split('&')[0] || sessionStorage.getItem('token') || '';
    }

}
