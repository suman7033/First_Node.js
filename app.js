const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req);
    console.log(res);
    res.write("hey");
    res.end();
})

server.listen(4000);