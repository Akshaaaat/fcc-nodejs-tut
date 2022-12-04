const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.end('welcome to my HomePage')
    }
    else{
        res.end('lmao');
    }
})

server.listen(5000)

