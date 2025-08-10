

"use client";
import { useRouter } from "next/navigation";
import {
  Home,
  Search,
  Music,
  User,
  DiscAlbum,
  ListMusic,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="fixed min-w-[23%] m-2 z-20 min-h-[97vh] rounded-2xl bg-black/50 text-white p-4 backdrop-blur-lg border border-white/10 shadow-inner shadow-black/40 overflow-hidden">
      {/* Shine & Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/2 before:to-white/0" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset shadow-[0_0_30px_4px_rgba(255,255,255,0.05)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col px-4 gap-6 text-sm">

        <div onClick={() => router.push("/")} className="flex items-center gap-3 px-2 py-2 bg-white/10 rounded-lg cursor-pointer font-medium">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </div>

        <div className="flex flex-col gap-2 text-white/80">
          <div onClick={() => router.push("/artists")} className="flex items-center gap-3 px-2 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
            <User className="w-5 h-5" />
            <span>Artists</span>
          </div>
          <div onClick={() => router.push("/albums")} className="flex items-center gap-3 px-2 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
            <DiscAlbum className="w-5 h-5" />
            <span>Albums</span>
          </div>
          <div onClick={() => router.push("/songs")} className="flex items-center gap-3 px-2 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
            <Music className="w-5 h-5" />
            <span>Songs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

