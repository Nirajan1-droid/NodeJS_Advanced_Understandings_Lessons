const net = require('net');

// Create a server
const server = net.createServer((socket) => {
  // This function is called when data arrives
  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
  });
});

// Listen on port 8080
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// 1. Here,server.listen(8080 setup the network socket and registers it with the operating system.
    
// 2.Here the Event Loop is waiting for the events on that 8080 socket.

// 3. when data arrives at that socket, the operating system informs the event loop.

// 4. Then the Event loop executes socket.on function printing the data recieved to console