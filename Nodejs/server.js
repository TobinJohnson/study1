const http=require('http')
 
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end('Hello, world')
})
server.listen(3000,()=>{console.log(`Server running on http://127.0.0.1:3000`)})

