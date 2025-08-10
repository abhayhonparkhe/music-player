"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePlayer } from "@/app/components/PlayerContext";

export default function SongsPage() {
  const [songs, setSongs] = useState([]);
  const {playTrack} = usePlayer();

  useEffect(() => {
    async function fetchSongs() {
      try {
        const res = await fetch("/api/deezer-songs");
        const data = await res.json();
        setSongs(data);
      } catch (err) {
        console.error("Error fetching songs:", err);
      }
    }

    fetchSongs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Songs</h1>
      <div className="space-y-4">
        {songs.map((song) => (
          <div
            key={song.id}
            onClickCapture={() => playTrack(song)}
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-3 rounded-lg backdrop-blur"
          >
            <Image
              src={song?.image}
              alt={song.title}
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <p className="text-sm font-medium">{song.title}</p>
              <p className="text-xs text-white/70">
                {song.artist} — {song.album}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
