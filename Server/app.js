const net = require('net');
var   Clients = require('./clients.js');

const server = new net.Server({});

server.
on('connection', (socket) => {
   Clients.register(socket);
  Clients.sendToAll("New user connected to room");
    socket.write("ok\r\n");
    socket.
    on('data', (msg) => {
      Clients.sendExcept(socket, msg);
    });
    socket.
    on('end', () => {
      Clients.revoke(socket);
      //Send Fin Back
      socket.close();
    });
    socket.
    on('error', (code) =>
    {
      Clients.revoke(socket);

    });

});



server.listen(30000, '127.0.0.1', () => {console.log("Started Server Sucessfully!")});
