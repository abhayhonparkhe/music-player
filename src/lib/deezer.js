export async function getTopChartsDeezer() {
  const res = await fetch('https://api.deezer.com/playlist/3155776842'); // Global Top 100

  if (!res.ok) {
    const error = await res.text();
    console.error("Deezer API error:", error);
    throw new Error(`Deezer track fetch error: ${error}`);
  }

  const data = await res.json();

  return data.tracks.data.map((track) => ({
    name: track.title,
    artist: track.artist.name,
    album: track.album.title,
    image: track.album.cover_medium,
    url: track.link,
    preview_url: track.preview // 30-second MP3 preview 🎧
  }));
}


// New: fetch any playlist by ID
export async function getDeezerPlaylist(playlistId) {
  const res = await fetch(`https://api.deezer.com/playlist/${playlistId}`);
  if (!res.ok) {
    const error = await res.text();
    console.error("Deezer API error:", error);
    throw new Error(`Deezer playlist fetch error: ${error}`);
  }
  const data = await res.json();
  return {
    cover: data.picture_xl || data.picture_big || data.picture_medium,
    title: data.title,
    description: data.description,
    tracks: data.tracks.data.map((track) => ({
      name: track.title,
      artist: track.artist.name,
      album: track.album.title, image: track.album.cover_medium,
      url: track.link,
      preview_url: track.preview,
      id: track.id, // Add track ID for next/prev functionality
      duration: track.duration // Add duration for display
    }))
  };
}