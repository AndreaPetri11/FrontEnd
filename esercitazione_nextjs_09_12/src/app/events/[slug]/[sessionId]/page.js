import { getEventBySlug, getSession } from "@/lib/events";
export default async function SessionPage({ params }) {
  const { slug, sessionId } = await params;
  const event = getEventBySlug(slug);
  const session = getSession(slug, sessionId);
  return (
    <main>
      <h1>{event.title}</h1>
      <p>{session.title}</p>
      <p>{session.time}</p>
      <p>{session.description}</p>
    </main>
  );
}
