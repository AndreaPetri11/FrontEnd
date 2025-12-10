import { getPopular } from "@/lib/tmdb";

const data = await getPopular();

return (
  <section>
    <h1>Film Popolari:</h1>
    <div>
      {" "}
      {data.results.map((movie) => (
        <article key={movie.id}>
          <h2>Titolo: {movie.title}</h2>
        </article>
      ))}
    </div>
  </section>
);
