import { getPopular } from "@/lib/tmdb";
import Link from "next/link";
export default async function MoviePage() {
  const data = await getPopular();
  //console.log(data);
  return (
    <section>
      <h1>Film Popolari:</h1>
      <br></br>
      <br></br>

      <div>
        {data.results.map((movie) => (
          <article key={movie.id}>
            <Link href={`/movies/${movie.id}`}> Dettagli</Link>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <br></br>
            <br></br>
          </article>
        ))}
      </div>
    </section>
  );
}
