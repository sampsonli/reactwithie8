let _baseUrl;
let _loginUrl;
if (process.env.EWT_ENV === 'mock') {
    _baseUrl = 'http://yapi.235.mistong.com/mock/619';
    _loginUrl = '//my.test.mistong.com/sso?sid=14';
} else
if (process.env.EWT_ENV === 'sit') {
    _baseUrl = '//gateway.test.mistong.com/api/psychology';
    _loginUrl = '//my.test.mistong.com/sso?sid=14';
    if (~window.location.href.indexOf('ewt360.com')) {
        _baseUrl = '//gateway.pre.ewt360.com/api/psychology';
        _loginUrl = '//passport.ewt360.com/sso?sid=16';
    }
} else if (process.env.EWT_ENV === 'pre') {
    _baseUrl = '//gateway.pre.ewt360.com/api/psychology';
    _loginUrl = '//passport.ewt360.com/sso?sid=16';
} else {
    _baseUrl = '//gateway.ewt360.com/api/psychology';
    _loginUrl = '//passport.ewt360.com/sso?sid=16';
}
export const baseURL = _baseUrl;
export const loginUrl = _loginUrl;
