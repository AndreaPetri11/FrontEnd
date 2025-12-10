export const getPopular = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=it-IT`,
    { cache: "force-cache" }
  );
  return res.json();
};

export const getMovieById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=it-IT`,
    { cache: "force-cache" }
  );
  return res.json();
};
