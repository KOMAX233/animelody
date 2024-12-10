import React, { useState } from "react";
import SongTable from "./SongTable";
import MALBox from "./MALBox";

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
