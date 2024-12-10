import { Button } from "@mui/material";
import React, { useState, useRef } from "react";

const songs = [
  { title: "Silhouette Dance", file: "/audio/240127SilhouetteDance.m4a" },
  { title: "Zatto bokura no machi", file: "/audio/241004zatto.m4a" },
  { title: "Kokyuu", file: "/audio/241008kokyuu.m4a" },
  { title: "Mist", file: "/audio/241201mist.m4a" },
  { title: "Refrain", file: "/audio/241210refrain.m4a" },
];

const Songs = () => {
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = (file: string) => {
    setCurrentSong(file);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const toggleLoop = () => {
    setIsLooping((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
    }
  };

  return (
    <div>
      <h1>Songs</h1>
      <div>
        {songs.map((song, index) => (
          <div key={index}>
            <button onClick={() => handlePlay(song.file)}>{song.title}</button>
          </div>
        ))}
      </div>

      {currentSong && (
        <div>
          <h3>
            Now Playing:{" "}
            {songs.find((song) => song.file === currentSong)?.title}
          </h3>
          <audio ref={audioRef} controls autoPlay>
            <source src={currentSong} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div>
            <Button onClick={toggleLoop}>
              {isLooping? "Disable loop": "Enable loop"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Songs;
