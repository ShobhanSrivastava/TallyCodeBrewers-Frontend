import { useState } from 'react';
import { generateUsername } from "../utils/uniqueNameGenerator";

function StartGame() {
    let randomUsername = generateUsername();

    const [username, setUsername] = useState(randomUsername);
    function handleClick() {
        randomUsername = generateUsername()
        setUsername(randomUsername);
    }

    return (
        <>
            Join With Username: { username }
            <button onClick={handleClick}>Change User Name</button>

            <button>Join Room</button>
        </>
    );
}

export default StartGame;