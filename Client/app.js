const net = require('net');

var socket = net.Socket(),
    stdIn = process.openStdin();


socket.connect(30000, '127.0.0.1', ()=> {
      stdIn.on("data", (d) => socket.write(d.toString().trim() + '\r\n'));
});
socket.on('data', function(d)
{
  console.log(d.toString().trim());
});

socket.on('error', (e) =>{ console.log(e); socket.destroy()});
