export async function GET() {
  try {
    const playlistRes = await fetch("https://api.deezer.com/playlist/3155776842");
    const playlistData = await playlistRes.json();

    const tracks = playlistData?.tracks?.data;

    // Deduplicate artist IDs
    const uniqueArtistsMap = {};
    tracks.forEach((track) => {
      const artist = track.artist;
      if (!uniqueArtistsMap[artist.id]) {
        uniqueArtistsMap[artist.id] = artist;
      }
    });

    const uniqueArtists = Object.values(uniqueArtistsMap);

    // Fetch full artist info (for image)
    const fullArtists = await Promise.all(
      uniqueArtists.map(async (artist) => {
        try {
          const res = await fetch(`https://api.deezer.com/artist/${artist.id}`);
          const data = await res.json();
          return {
            id: data.id,
            name: data.name,
            picture_medium: data.picture_medium || null,
          };
        } catch (e) {
          return null;
        }
      })
    );

    // Remove nulls and return only artists with images
    const filteredArtists = fullArtists?.filter(a => a?.picture_medium);

    return Response.json(filteredArtists);
  } catch (e) {
    console.error("Server error fetching artists:", e);
    return new Response(JSON.stringify({ error: "Failed to fetch artists" }), {
      status: 500,
    });
  }
}
