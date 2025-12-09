import Link from "next/link";
import { getEventBySlug } from "../../../lib/events";

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  return (
    <main>
      <div>
        <h1>Titolo: {event.title}</h1>
        <p>Desrizione: {event.description}</p>
        <p>Orario prima lezione: {event.program[0].time}</p>
      </div>
      <section>
        {event.program.map((session) => (
          <div key={session.sessionId}>
            <h3>{session.title}</h3>
            <Link href={`/events/${slug}/${session.sessionId}`}>Dettagli</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
