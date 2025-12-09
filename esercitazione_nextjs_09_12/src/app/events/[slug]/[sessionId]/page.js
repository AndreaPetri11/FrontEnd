import { getEventBySlug, getSession, events } from "@/lib/events";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const paths = [];
  events.forEach((e) => {
    e.program.forEach((session) => {
      paths.push({ slug: e.slug, sessionId: session.sessionId });
    });
  });
  return paths;
}

export default async function SessionPage({ params }) {
  const { slug, sessionId } = await params;
  const event = getEventBySlug(slug);
  const session = getSession(slug, sessionId);

  if (!event || !session) {
    notFound();
  }
  return (
    <main>
      <h1>{event.title}</h1>
      <p>{session.title}</p>
      <p>{session.time}</p>
      <p>{session.description}</p>
    </main>
  );
}
