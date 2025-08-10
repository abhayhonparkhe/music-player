"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await fetch("/api/deezer-albums");
        const data = await res.json();
        setAlbums(data);
      } catch (err) {
        console.error("Error fetching albums:", err);
      }
    }

    fetchAlbums();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white/5 hover:bg-white/10 p-4 rounded-xl flex flex-col items-center text-center backdrop-blur"
          >
            <Image
              src={album.cover}
              alt={album.title}
              width={100}
              height={100}
              className="rounded-lg mb-2"
            />
            <span className="text-sm font-medium">{album.title}</span>
            <span className="text-xs text-white/70">{album.artist}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
