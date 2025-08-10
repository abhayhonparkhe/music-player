'use client';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  ListMusic
} from "lucide-react";
import { usePlayer } from "./PlayerContext";


export default function MusicPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    playNext,
    playPrev,
    audioRef,
    volume,
    setVolume
  } = usePlayer();

  // Update the audio element's volume when volume state changes
  if (audioRef.current) {
    audioRef.current.volume = volume;
  }
  // Example: tracks list for next/prev (replace with your actual tracks list)
  const tracks = []; // You can pass topTracks via context or props if needed

  return (
    <div className="fixed bottom-4 left-[25%] right-4 z-20 h-14 rounded-4xl bg-black/40 backdrop-blur-lg border border-white/10 shadow-inner shadow-black/40 overflow-hidden px-4 flex items-center justify-between">
      {/* Shine Layer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:to-white/0" />

      {/* Glowing Border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset shadow-[0_0_30px_4px_rgba(255,255,255,0.05)]" />

      {/* Content */}
      <div className="relative z-10 text-white flex items-center w-full justify-between">
        {/* Left: Song Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            {/* <ListMusic size={20} className="text-white/60" /> */}
            {
              currentTrack ? (
        <img
              src={currentTrack?.image }
              alt="Album Cover"
              className="w-10 h-10 rounded-lg object-cover"
            /> 
            ) :
            <ListMusic size={20} className="text-white/60" />
            }
            
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium truncate">
              {currentTrack?.name || "Song Title"}
            </div>
            <div className="text-xs text-white/60 truncate">
              {currentTrack?.artist || "Artist Name"}
            </div>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-4">
          <button className="p-1 rounded hover:bg-white/10 transition">
            <Shuffle size={18} />
          </button>
          <button
            className="p-1 rounded hover:bg-white/10 transition"
            onClick={() => playPrev(tracks)}
            disabled={!currentTrack}
          >
            <SkipBack fill="currentColor" size={22} />
          </button>
          <button
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            onClick={togglePlay}
            disabled={!currentTrack}
          >
            {isPlaying ? (
              <Pause fill="currentColor" size={24} />
            ) : (
              <Play fill="currentColor" size={24} />
            )}
          </button>
          <button
            className="p-1 rounded hover:bg-white/10 transition"
            onClick={() => playNext(tracks)}
            disabled={!currentTrack}
          >
            <SkipForward fill="currentColor" size={22} />
          </button>
          <button className="p-1 rounded hover:bg-white/10 transition">
            <Repeat size={18} />
          </button>
        </div>

        {/* Right: Volume */}
        <div className="flex items-center gap-2 min-w-[100px] justify-end">
          <Volume2 size={20} />
          <div className="w-24 h-1 bg-white/20 rounded-full"
          onClickCapture={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const newVolume = Math.max(0, Math.min(1, offsetX / rect.width));
            setVolume(newVolume)}}>
            <div className="w-1/2 h-1 bg-white/40 rounded-full" 
            style={{ width: `${volume * 100}%` }}/>
          </div>
        </div>
      </div>
    </div>
  );
}



