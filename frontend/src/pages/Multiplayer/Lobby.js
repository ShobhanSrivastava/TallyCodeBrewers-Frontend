import { useContext, useParams, useEffect } from "react";
import { PlayerContext } from "../../context";
import toast from 'react-hot-toast';

function Lobby() {
    const { playerData, dispatch } = useContext(PlayerContext);
    // const { roomID } = useParams();

    // useEffect(()=>{
    //     playerData.socket.
    // })

    async function handleCopy (){
        try {
            await navigator.clipboard.writeText(playerData.room.roomId);
            toast.success('Room ID copied to clipboard');
        } catch (err) {
            toast.error('Could not copy the Room ID');
            console.error(err);
        }
    }
    
    return (
        <>
            <button onClick={handleCopy}>Copy Room ID</button>
        </>
    );
}

export default Lobby;