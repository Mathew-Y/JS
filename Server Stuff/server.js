const net = require('net')

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString())
    })


    socket.write('SERVER: Hello! This is the server speaking. \n')
    socket.end('SERVER: Closing connection now. \n')
}) .on('error', (err) => {
    console.log(err)
})

server.listen(9898, () => {
    console.log('opened server on', server.address().port)
})