const express = require('express');
const cors = require('cors');
const { json } = require('express');
const { Server } = require('socket.io');
const artsRoutes = require('./routes/artsRoutes');

const app = express();
const PORT = 5000;
const FRONTEND_ORIGIN = 'http://localhost:3000';


app.use(cors()).use(json());
app.use('/api', artsRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: FRONTEND_ORIGIN,
  },
});

const socketIOHandler = require('./socketIOHandler');
socketIOHandler(io);
