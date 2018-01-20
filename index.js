'use strict';
const http = require('http');
const server = http.createServer((req,res)=>{
    const now = new Date().getTime();
    res.setHeadr('Set-Cookie','last_access='+now+';');
    res.end('hi');
});
const port = 8000;
server.listen(port,() => {
    console.info('Listenning on '+port);
});
