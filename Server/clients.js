var _ = {
  without : function(arr,ele) {

    var filarr = arr.filter((e) => { if(e !== ele) {return e;} });
    return filarr;

    }
  };

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
    t.forEach((s) => {s.write(message)});
  }
};
