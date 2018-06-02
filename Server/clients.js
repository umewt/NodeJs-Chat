var _ = require('underscore');

module.exports = {
  sockets: [],
  sendToAll: function(message)
  {
    this.sockets.forEach((socket) => {socket.write(message)});
  },
  register : function(socket)
  {
    this.sockets.push(socket);
  },
  revoke : function(socket)
  {
    this.sockets = _.without(this.sockets, socket);
  },
  sendExcept(socket, message)
  {
    var t = _.without(this.sockets, socket);
    t.forEach((socket) => {socket.write(message)});
  }
};
