"use client";
import Image from "next/image";
import { usePlayer } from "@/app/components/PlayerContext";
import { useEffect } from "react";

// Helper to format seconds to mm:ss
function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function GenrePlaylistClient({ playlist }) {
  const { playTrack, setPlaylistTracks, currentTrack } = usePlayer();

  useEffect(() => {
    setPlaylistTracks(playlist.tracks);
  }, [playlist.tracks, setPlaylistTracks]);

  const handlePlay = (track) => {
    setPlaylistTracks(playlist.tracks);
    playTrack(track);
  };

  return (
    <div className="p-6">
      {/* Playlist Cover and Title */}
      <div className="flex flex-col items-center mb-8">
        {playlist.cover && (
          <Image
            src={playlist.cover}
            alt={playlist.title}
            width={320}
            height={320}
            className="rounded-2xl shadow-lg mb-4"
          />
        )}
      
        <h1 className="text-2xl font-bold text-white mb-1">{playlist.title}</h1>
        {playlist.description && (
          <p className="text-white/70 text-center max-w-xl">{playlist.description}</p>
        )}
      </div>
      {/* Songs List */}
      <div className="bg-white/5 rounded-xl overflow-hidden">
        {playlist.tracks.map((track) => (
          <div
            key={track.id}
            className={`flex items-center gap-4 px-4 py-3 border-b border-white/10 last:border-b-0 hover:bg-white/10 transition cursor-pointer ${
              currentTrack?.id === track.id ? "bg-white/10" : ""
            }`}
            onClick={() => handlePlay(track)}
          >
            <Image
              src={track.image}
              alt={track.name}
              width={56}
              height={56}
              className="rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="text-white font-medium truncate">{track.name}</div>
              <div className="text-white/60 text-sm truncate">{track.artist}</div>
            </div>
            <div className="text-white/60 text-xs font-mono min-w-[40px] text-right">
              {formatDuration(track.duration)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}