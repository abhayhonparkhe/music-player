"use client";
import { createContext, useContext, useState, useRef } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Optional: manage volume
  const audioRef = useRef(null);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Play or pause audio
  const togglePlay = () => {
    if (!currentTrack?.preview_url) return;
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  // Play a new track
  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 0);
  };

  // Next/Previous (for TopCharts list)
  const playNext = () => {
    if (!currentTrack || playlistTracks.length === 0) return;
    const idx = playlistTracks.findIndex(t => t.id === currentTrack.id);
    const next = playlistTracks[(idx + 1) % playlistTracks.length];
    playTrack(next);
  };
  const playPrev = () => {
    if (!currentTrack || playlistTracks.length === 0) return;
    const idx = playlistTracks.findIndex(t => t.id === currentTrack.id);
    const prev = playlistTracks[(idx - 1 + playlistTracks.length) % playlistTracks.length];
    playTrack(prev);
  };

  return (
    <PlayerContext.Provider value={{
      currentTrack,
      isPlaying,
      setIsPlaying,
      playTrack,
      togglePlay,
      playNext,
      playPrev,
      audioRef,
        volume,
        setVolume,
        setPlaylistTracks, // For setting playlist tracks in context
    }}>
      {children}
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack?.preview_url}
        volume={volume}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}