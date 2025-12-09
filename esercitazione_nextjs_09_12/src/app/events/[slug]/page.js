import Link from "next/link";
import { getEventBySlug } from "../../../lib/events";
import { notFound } from "next/navigation";
import { events } from "../../../lib/events";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }
  return (
    <main>
      <div>
        <h1>Titolo: {event.title}</h1>
        <p>Desrizione: {event.description}</p>
        <p>Orario prima lezione: {event.program[0].time}</p>
      </div>
      <section>
        {event.program.map((s) => (
          <div key={s.sessionId}>
            <h3>{s.title}</h3>
            <Link href={`/events/${slug}/${s.sessionId}`}>Dettagli</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
