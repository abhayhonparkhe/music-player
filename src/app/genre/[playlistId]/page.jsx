
import { getDeezerPlaylist } from "@/lib/deezer";
import GenrePlaylistClient from "./GenrePlaylistClient";

export default async function GenrePlaylistPage({ params }) {
  const { playlistId } = params;
  const playlist = await getDeezerPlaylist(playlistId);

  return <GenrePlaylistClient playlist={playlist} />;
}