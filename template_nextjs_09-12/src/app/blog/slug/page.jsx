/*import { notFound } from "next/navigation";

const articoli = {
  "primo-post": { titolo: "Il mio primo post", contenuto: "..." },
};

export default async function Article({ params }) {
  const { slug } = await params;
  const articolo = articoli[slug];

  if (!articolo) notFound();

  return (
    <>
      <h1>{articolo.titolo}</h1>
      <p>{articolo.contenuto}</p>
    </>
  );
}
*/

import { posts } from "../../lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <h1>Post non trovato</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Contenuto dell’articolo...</p>
    </div>
  );
}
