const http = require('http');
const EventEmitter = require('events').EventEmitter;
const getHome = (url = '', cb) => {
    const creq = http.request ({
        method: 'GET',
        host: 'live.m.500.com',
        port: '80',
        path: url,
        headers: {
            host: 'live.m.500.com'
        },
    }, (response) => {
        response.setEncoding('utf8')
        let chunks = []
        let ret
        response.on('data', (data) => {
            chunks.push(data)
        });
        response.on('end', () => {
            ret = chunks.join('')
            cb(null, {ret, headers: response.headers})
        })


    });
    creq.end()
    creq.on('error', (e) => {
        cb(e)
    })
}

const event = new EventEmitter();
const requesting = {};
const server = http.createServer((req, resp) => {
    event.once(req.url, (data) => {
        resp.writeHead(200, data.headers)
        resp.write(data.ret)
        resp.end();
    });
    if(requesting[req.url]) {
        console.log('requesting')
        return;
    } else {
        requesting[req.url] = true;
    }

    getHome(req.url, (error, data) => {
        if(error) {
            return;
        }
        event.emit(req.url, data);
        requesting[req.url] = false;
    })





})

server.listen(80)
