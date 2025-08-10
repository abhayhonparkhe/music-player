"use client";
import { usePlayer } from "./PlayerContext";
import Image from "next/image";

export default function TopChartsClient({ topTracks }) {
   const { playTrack } = usePlayer();
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white font-bold">Top Charts</h1>
        <button
          // No logic, just UI
          className="text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition"
        >
          Show All
        </button>
      </div>
      <div className="flex gap-4 pb-2 overflow-hidden">
        {topTracks?.map((track, i) => (
          <div className="min-w-[150px] flex-1" key={i}
          onClickCapture={() => playTrack(track)}>
            <TrackCard track={track} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackCard({ track }) {
  return (
    <div className="rounded-lg flex flex-col items-center">
      {track.image && track.image !== "" ? (
        <Image
          src={track.image}
          alt={track.name}
          width={150}
          height={150}
          className="w-full h-auto object-cover rounded mb-2"
        />
      ) : (
        <div className="w-[150px] h-[150px] bg-neutral-800 flex items-center justify-center rounded mb-2">
          <span className="text-white/60">No Image</span>
        </div>
      )}
      <p className="text-white text-sm font-medium truncate w-full ">
        {track.name}
      </p>
      <p className="text-white/60 text-xs truncate w-full ">
        {track.artist}
      </p>
    </div>
  );
}