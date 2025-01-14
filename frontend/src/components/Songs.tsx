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
  {
    title: "Closing",
    file: "/audio/250113closing.m4a",
    artist: "Touma Kazusa",
    source: "White Album 2 CODA Kazusa True ED",
  },
  {
    title: "Silhouette Dance",
    file: "/audio/240127SilhouetteDance.m4a",
    artist: "MyGO!!!!!",
    source: "Bang Dream It's Mygo!!!!!",
  },
  {
    title: "Kokyuu",
    file: "/audio/241008kokyuu.m4a",
    artist: "MyGO!!!!!",
    source: "Bang Dream It's Mygo!!!!!",
  },
  {
    title: "Mist",
    file: "/audio/241201mist.m4a",
    artist: "MyGO!!!!!",
    source: "Bang Dream It's Mygo!!!!!",
  },
  {
    title: "Refrain",
    file: "/audio/241210refrain.m4a",
    artist: "MyGO!!!!!",
    source: "Bang Dream It's Mygo!!!!!",
  },
  {
    title: "Zattou, Bokura no Machi",
    file: "/audio/241004zatto.m4a",
    artist: "TOGENASHITOGEARI",
    source: "Girls Band Cry",
  },
  {
    title: "Feel My Soul",
    file: "/audio/241004feelmysoul.m4a",
    artist: "Chika Komari",
    source: "Make Heroine ga Oosugiru!",
  },
  {
    title: "Burn My Soul",
    file: "/audio/241210burnmysoul.m4a",
    artist: "She is Legend",
    source: "Heaven Burns Red",
  },
  {
    title: "Hijitsuzai Seishounen",
    file: "/audio/240817HijitsuzaiSeishounen.m4a",
    artist: "Itou Kanako",
    source: "Chaos;Child",
  },
  {
    title: "Silent Wind Bell",
    file: "/audio/240707silentwindbell.m4a",
    artist: "Itou Kanako",
    source: "Chaos;Child",
  },
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
              <TableCell>Uploader</TableCell>
              <TableCell>Original Artist</TableCell>
              <TableCell>Source</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, index) => (
              <TableRow key={index} onClick={() => handlePlay(song.file)}>
                <TableCell>{index}</TableCell>
                <TableCell>{song.title}</TableCell>
                <TableCell>?</TableCell>
                <TableCell>{song.artist}</TableCell>
                <TableCell>{song.source}</TableCell>
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
