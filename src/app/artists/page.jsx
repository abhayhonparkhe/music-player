"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const res = await fetch("/api/deezer-artists");
        const data = await res.json();
        setArtists(data);
      } catch (err) {
        console.error("Client error fetching artists:", err);
      }
    }

    fetchArtists();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Artists</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {artists?.filter((artist) => artist.picture_medium) // skip artists with no image
  .map((artist) => (
    <div
      key={artist.id}
      className="bg-white/5 hover:bg-white/10 p-4 rounded-xl flex flex-col items-center text-center backdrop-blur"
    >
      <Image
        src={artist.picture_medium || "/fallback-artist.png"}
        alt={artist.name}
        width={100}
        height={100}
        
        className="rounded-full mb-2"
      />
      <span className="text-sm">{artist.name}</span>
    </div>
))}

      </div>
    </div>
  );
}
