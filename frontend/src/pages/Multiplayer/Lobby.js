import { useContext, useEffect } from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from "../../context";
import toast from 'react-hot-toast';

function Lobby() {
    const navigate = useNavigate();
    const { playerData, dispatch } = useContext(PlayerContext);
    const { roomID } = useParams();
    
    useEffect(()=>{
        console.log(playerData.room);
        playerData.socket.on('room_update', (data) => {
            const { room } = data;
            dispatch({ type: 'CHANGE_ROOM', room });
        })

        return () => {
            navigate()
        }
    }, [])

    async function handleCopy (){
        try {
            await navigator.clipboard.writeText(roomID);
            toast.success('Room ID copied to clipboard');
        } catch (err) {
            toast.error('Could not copy the Room ID');
            console.error(err);
        }
    }

    function handleStartMatch() {
        
    }
    
    return (
        <>
            <button onClick={handleCopy}>Copy Room ID</button>
            {
                playerData.room.roomOwner === playerData.username ? <button onClick={handleStartMatch}>Start Match</button> : ''
            }

            <div>
                { playerData.room.players.length } Player { playerData.room.players.length > 1 ? 's' : ''} in the lobby
                {
                    playerData.room.players.length > 0 ? playerData.room.players.map(player => {
                        return <div>{ player.username }</div>
                    }) : 
                    'No player'
                }
            </div>
        </>
    );
}

export default Lobby;