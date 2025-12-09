import Link from "next/link";
import { events } from "../lib/events";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Presentazione del portale</p>
      <span>Eventi disponibili {events.length}</span>
      <section>
        {events.map((event) => (
          <div key={event.slug}>
            <h2>{event.title}</h2>
            <h3>{event.program[0].time}</h3>
            <Link href={`/events/${event.slug}`}>Dettagli evento</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
