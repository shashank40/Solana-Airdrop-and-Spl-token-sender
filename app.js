import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./webApp/index.html').pipe(res)
})

console.log('server started on http://127.0.0.1:3000')
server.listen(process.env.PORT || 3000)

/// to serve html page with http protocol