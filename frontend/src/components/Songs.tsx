import { Button } from "@mui/material";
import React, { useState, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Duration?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, index) => (
              <TableRow key={index}>
                <TableCell>
                  {index}
                </TableCell>
                <TableCell>
                  <button onClick={() => handlePlay(song.file)}>
                    {song.title}
                  </button>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
              {isLooping ? "Disable loop" : "Enable loop"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Songs;
