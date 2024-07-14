import { FormEvent, useEffect, useState } from "react";

const MALBox = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch('api/hello')
        .then(response => response.json())
        .then(data => setMessage(data.message));
    }, [])
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(username);
    }

    return(
        <div className="flex-1 p-4">
            <form onSubmit={handleSubmit}>
                <input 
                placeholder='MyAnimeList User Name'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="border border-gray-400"
                />
                {/* change to magnify glass icon later */}
                <button type="submit" 
                className="border border-gray-400">search</button> 

            </form>
            <p>{username}'s completed anime: {message}</p>
        </div>
    )
}

export default MALBox;