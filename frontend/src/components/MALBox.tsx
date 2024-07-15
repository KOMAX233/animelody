import { FormEvent, useEffect, useState } from "react";

interface MALBoxProps {
    setUsername: (username: string) => void;
}

const MALBox: React.FC<MALBoxProps> = ({ setUsername }) => {
    const [usernameInput, setUsernameInput] = useState('');
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     fetch('/api/hello')
    //         .then(response => response.json())
    //         .then(data => setMessage(data.message));
    // }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setUsername(usernameInput);
        console.log(usernameInput);
    };

    return (
        <div className="flex-1 p-4">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='MyAnimeList User Name'
                    onChange={(e) => setUsernameInput(e.target.value)}
                    value={usernameInput}
                    className="border border-gray-400"
                />
                {/* change to magnify glass icon later */}
                <button type="submit" className="border border-gray-400">search</button>
            </form>
            <p>{usernameInput}'s anime list:</p>
        </div>
    );
};

export default MALBox;
