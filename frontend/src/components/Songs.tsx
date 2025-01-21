import React, { useState, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import ProgressBar from "./ProgressBar";

const songs = [
  {
    title: "Wings of Courage -sora wo koete",
    file: "/audio/250120wings.m4a",
    artist: "Kawada Mami",
    source: "Ao no Kanata no Four Rhythm",
  },
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
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = (file: string) => {
    setCurrentSong(file);
    if (audioRef.current) {
      audioRef.current.src = file;
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (percentage: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const newTime = (percentage / 100) * audioRef.current.duration;
      if (!isNaN(newTime) && isFinite(newTime)) {
        audioRef.current.currentTime = newTime;
      } else {
        console.error("Invalid time value:", newTime);
      }
    } else {
      console.error(
        "Audio duration is not available or audio element is null.",
      );
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
              <TableCell>Artist</TableCell>
              <TableCell>Source</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, index) => (
              <TableRow key={index} onClick={() => handlePlay(song.file)}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{song.title}</TableCell>
                <TableCell>{song.artist}</TableCell>
                <TableCell>{song.source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {currentSong && (
        <div>
          <Typography variant="h6">
            Now Playing:{" "}
            {songs.find((song) => song.file === currentSong)?.title}
          </Typography>
          <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
          <ProgressBar progress={progress} onSeek={handleSeek} />
        </div>
      )}
    </div>
  );
};

export default Songs;
