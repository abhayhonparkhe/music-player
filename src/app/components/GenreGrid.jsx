"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const genres = [
  { name: "Lofi", image: "/genres/lofi.png", playlistId: "1111142221" },
  { name: "Chill", image: "/genres/chill.png", playlistId: "1443694375" },
  { name: "Pop", image: "/genres/pop.png", playlistId: "1313621735" },
  { name: "Electronic", image: "/genres/electronic.png", playlistId: "1313619985" },
  { name: "Jazz", image: "/genres/jazz.png", playlistId: "1313619945" },
  { name: "Rock", image: "/genres/rock.jpg", playlistId: "1313619995" },
];

export default function GenreGrid() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const repeatedGenres = [...genres, ...genres, ...genres];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const maxScroll = container.scrollWidth / 3;
      if (container.scrollLeft >= maxScroll * 2) container.scrollLeft = maxScroll;
      else if (container.scrollLeft <= 0) container.scrollLeft = maxScroll;
    };
    container.scrollLeft = container.scrollWidth / 3;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white font-bold">Explore Genres</h1>
        <button
          onClick={scrollNext}
          className="text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition"
        >
          Show More
        </button>
      </div>
      <div className="overflow-hidden rounded-lg">
        <div
          ref={scrollRef}
          className="flex space-x-4 rounded-lg overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory h-full"
        >
          {repeatedGenres.map((genre, i) => (
            <div
              key={`${genre.name}-${i}`}
              className="flex-shrink-0 w-[45vw] rounded-lg sm:w-[30vw] md:w-[20vw] snap-start"
            >
              <div
                className="relative  rounded-lg overflow-hidden shadow-lg bg-neutral-800 hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center"
                onClick={() => router.push(`/genre/${genre.playlistId}`)}
              >
                <Image
                  src={genre.image}
                  alt={genre.name}
                  height={200}
                  width={200}
                  className="rounded-lg"
                /> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


