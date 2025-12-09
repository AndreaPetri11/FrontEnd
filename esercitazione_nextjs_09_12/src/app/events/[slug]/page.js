import { getEventBySlug } from "../../../lib/events";

export default async function EventPage({ params }) {
  const { slug } = params;
  const event = getEventBySlug(slug);
  return (
    <main>
      <div>
        <h1>Titolo: {event.title}</h1>
        <p>Desrizione: {event.description}</p>
        <p>Orario prima lezione: {event.program[0].time}</p>
      </div>
    </main>
  );
}
