import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

    function handleClick() {
        randomUsername = generateUsername()
        dispatch({ type: 'CHANGE_USERNAME', username: randomUsername });
        toast.success("New username generated")
    }
    
    useEffect(() => {
        dispatch({ type: 'CHANGE_USERNAME', username: randomUsername });

        if(playerData.socket) return;
        const newSocket = initSocket();
        dispatch({ type: 'CHANGE_SOCKET', socket: newSocket });

        newSocket.on('create_room_success', (data) => {
            const { room, roomID } = data;
            dispatch({ type: 'CHANGE_ROOM', room });
            navigate(`/lobby/${roomID}`)
        });

        return ()=>{
            navigate('/multiplayer');
        }
    },[]);
    
    function handleJoin() {
        playerData.socket.emit('create_room', { username: playerData.username, difficulty: playerData.difficulty });
    }

    return (
        <>
            <Link to='/join-room'>Join Room</Link>
            Join With Username: { playerData.username }
            <button onClick={handleClick}>Change User Name</button>

            <DifficultySelector playerData={playerData} dispatch={dispatch} />
            <button onClick={handleJoin}>Join Room</button>
        </>
    );
}

export default StartGame;