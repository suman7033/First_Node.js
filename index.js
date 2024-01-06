const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        console.log('data sent by browser =>', parsedUrl.query.name);
        res.end('Welcome to the home page');
    } else if (parsedUrl.pathname === '/about') {
         res.end('Welcome to the about page');
    } else if (parsedUrl.pathname === '/help') {
         res.end('Welcome to the help page');
    } else {
        res.end('Not Found');
    }
});

server.listen(4000, () => {
    console.log('Server is running on port');
});
