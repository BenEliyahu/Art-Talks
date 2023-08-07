module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      socket.on('artPage', (artId) => {
        socket.join(artId);
        console.log(`User joined art page`);
      });
  
      socket.on('chatMessage', (artId, message) => {
        io.to(artId).emit('message', message);
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  