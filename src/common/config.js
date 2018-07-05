let baseURL = '';
let loginUrl = '';
let domain = '';
let ucweburl = '';
let ewturl = '';
let studyurl = '';
if (process.env.NODE_ENV === 'production') {
    if (process.env.EWT_ENV === '235') {
        domain = 'http://my.235.mistong.com'


        baseURL = 'http://10.0.11.86:8769/api/evaluation';
        loginUrl = 'http://my.235.mistong.com/sso?sid=14';
        ucweburl = 'http://my.235.mistong.com';
        ewturl = 'http://www.235.mistong.com';
        studyurl = 'http://study.235.mistong.com';
        // loginUrl = 'http://xinli.ewt360.com/Login?fromurl=http%3a%2f%2fxinli.ewt360.com%2f'
    } else {
        domain = 'http://passport.ewt360.com'
        // 线上接口
        baseURL = 'http://gateway.ewt360.com/api/evaluation';
        loginUrl = 'http://passport.ewt360.com/sso?sid=16'
        ucweburl = 'http://passport.ewt360.com';
        ewturl = 'http://www.ewt360.com';
        studyurl = 'http://study.ewt360.com';

    }


} else {
    // 开发环境自己随意配置
    // ucweburl = 'http://my.235.mistong.com';
    ucweburl = 'http://passport.ewt360.com';
    // ucweburl = 'http://my.235.mistong.com';
    ewturl = 'http://www.235.mistong.com';
    studyurl = 'http://study.235.mistong.com';
    // 开发环境自己随意配置
    domain = 'http://my.235.mistong.com';
    baseURL = 'http://10.0.11.86:8769/api/evaluation';
    loginUrl = 'http://my.235.mistong.com/sso?sid=14';
    // domain = 'http://my.233.mistong.com';
    // // baseURL = '';
    // baseURL = 'http://10.0.11.28:8769/api/evaluation';

    // loginUrl = 'http://my.233.mistong.com/sso?sid=14'

    // domain = 'http://passport.ewt360.com'
    // // 线上接口
    // baseURL = 'http://gateway.ewt360.com/api/evaluation';
    // loginUrl = 'http://passport.ewt360.com/sso?sid=16'
}
export const ajaxbaseurl = baseURL;
export const loginbaseurl = loginUrl;
export const maindomain = domain;
export const UCWEBURL = ucweburl;
export const EWTURL = ewturl;
export const STUDYURL = studyurl;
