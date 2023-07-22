import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateUsername } from "../utils/uniqueNameGenerator";
import initSocket from '../socket';
import toast from 'react-hot-toast';
// import { EVENTS } from '../utils/actions';
import { PlayerContext } from '../context';
import DifficultySelector from './DifficultySelector';

function StartGame() {
    const navigate = useNavigate();

    const { playerData, dispatch } = useContext(PlayerContext);

    let randomUsername = generateUsername();
    const [username, setUsername] = useState(randomUsername);
    const [socket, setSocket] = useState(null);

    function handleClick() {
        randomUsername = generateUsername()
        setUsername(randomUsername);
        toast.success("New username generated")
    }

    function handleJoin() {
        if(socket) return;
        
        const newSocket = initSocket();
        console.log(newSocket);
        
        setSocket(newSocket);

        newSocket.emit('create_room', { username, difficulty: playerData.difficulty });
        console.log(socket);
        newSocket.on('create_room_success', (data) => {
            const { room, roomID } = data;
            dispatch({ type: 'CHANGE_ROOM', room });
            // navigate(`/lobby/${roomID}`)
        });
    }

    return (
        <>
            Join With Username: { username }
            <button onClick={handleClick}>Change User Name</button>

            <DifficultySelector playerData={playerData} dispatch={dispatch} />
            <button onClick={handleJoin}>Join Room</button>
        </>
    );
}

export default StartGame;