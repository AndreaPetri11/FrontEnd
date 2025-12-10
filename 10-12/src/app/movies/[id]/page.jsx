import { getMovieById } from "../../../lib/tmdb";

export default async function MovieDetailsPage({ params }) {
  const { id } = await params;
  const movie = await getMovieById(id);
  console.log(movie);
  return (
    <div>
      <h1>Titolo Film: {movie.title} </h1>
    </div>
  );
}
