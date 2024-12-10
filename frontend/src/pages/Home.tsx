import React, { useState } from "react";
import SongTable from "../components/SongTable";
import MALBox from "../components/MALBox";

const Home = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <main>
        <MALBox setUsername={setUsername} />
        <SongTable username={username} />
      </main>
    </div>
  );
};

export default Home;
