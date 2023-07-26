const http=require('http') 
//creating a server

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('welcome to our home page')
}
if(req.url==='/about'){
    res.end('here is our short history')
}
res.end(`
<h1>oops!</h1>
<p>cant find this page</p>
<a href="/">back home</a>
`)
// res.write('welcome to our home page')
// res.end()
})

server.listen(5000)