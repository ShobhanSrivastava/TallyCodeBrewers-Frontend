import { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from "../../context";
import toast from 'react-hot-toast';

function JoinRoom() {
    const navigate = useNavigate();
    const [roomID, setRoomID] = useState('');
    const { playerData, setPlayerData } = useContext(PlayerContext);

    useEffect(()=>{
        

        console.log(playerData.socket);
    }, [])

    function handleJoin() {

    }
    
    return (
        <>
            Join Room
            <input value={roomID} onChange={(e)=>setRoomID(e.target.value)} />
            <button onClick={handleJoin} >Join</button>
        </>
    );
}

export default JoinRoom;