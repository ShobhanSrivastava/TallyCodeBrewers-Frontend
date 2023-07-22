import { io } from 'socket.io-client';

const options = {
    reconnection: false,
    transports: ['websocket'],
};

function initSocket() {
    const socket = io('http://localhost:8000', options);
    return socket;
}

export default initSocket;