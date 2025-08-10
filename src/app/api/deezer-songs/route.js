export async function GET() {
  try {
    const res = await fetch("https://api.deezer.com/playlist/3155776842");
    const data = await res.json();

    const tracks = data.tracks.data.map((track) => ({
      id: track.id,
      title: track.title,
      artist: track.artist.name,
      album: track.album.title,
      image: track.album.cover_medium,
      preview_url: track.preview,
    }));

    return Response.json(tracks);
  } catch (err) {
    console.error("Error fetching songs:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch songs" }), {
      status: 500,
    });
  }
}
