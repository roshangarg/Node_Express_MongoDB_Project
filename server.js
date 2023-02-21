const http = require('http')
const fs = require('fs')
const _ = require('lodash')


const server = http.createServer((req , res ) => {

    // ?lodash
  const num = _.random(0,30)
  const printName = _.once(() => {
    console.log("Roshan garg")
    
  })
  printName()
  printName()
  console.log(num)
    // console.log(req.url , req.method)
    res.setHeader('Content-Type' , 'text/html')
    let path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break
        case '/about-garg':
            
            res.statusCode = 301;
            res.setHeader('Location' ,'/about');
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break
    }

    fs.readFile(path , (err, data ) => {
        if(err) {
            console.log(err)
            res.end()
        }
        res.end(data)
    })

})

server.listen(3000, 'localhost' , () => {
    console.log('listening for port no 3000')
})