export async function GET() {
  try {
    const res = await fetch("https://api.deezer.com/playlist/3155776842");
    const data = await res.json();

    const tracks = data.tracks.data;

    // Deduplicate albums
    const albumsMap = {};
    tracks.forEach((track) => {
      const album = track.album;
      if (!albumsMap[album.id]) {
        albumsMap[album.id] = {
          id: album.id,
          title: album.title,
          cover: album.cover_medium,
          artist: track.artist.name,
        };
      }
    });

    return Response.json(Object.values(albumsMap));
  } catch (err) {
    console.error("Error fetching albums:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch albums" }), {
      status: 500,
    });
  }
}
