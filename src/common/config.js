let baseURL = ''
let loginUrl = ''
if (process.env.NODE_ENV === 'production') {
    if (process.env.EWT_ENV === '235') {


        baseURL = 'http://10.0.11.28:8768/api/evaluation';
        loginUrl = 'http://my.235.mistong.com/login'
        // loginUrl = 'http://xinli.ewt360.com/Login?fromurl=http%3a%2f%2fxinli.ewt360.com%2f'
    } else {
        // 线上接口
        baseURL = 'http://10.0.11.28:8768/api/evaluation';
        loginUrl = 'http://passport.ewt360.com/login'

    }


} else {
    // 开发环境自己随意配置

    baseURL = '';
    loginUrl = 'http://my.235.mistong.com/login'
}
export const ajaxbaseurl = baseURL;
export const loginbaseurl = loginUrl;
