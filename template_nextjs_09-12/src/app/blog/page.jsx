import Link from "next/link";

const articoli = [
  {
    slug: "primo-post",
    titolo: "Il mio primo post: ",
  },
  {
    slug: "guida-nextjs",
    titolo: "Styling in Next.js",
  },
  {
    slug: "api-routes-nextjs",
    titolo: "Introduzione alle API Routes in Next.js",
  },
  {
    slug: "nextjs-routing",
    titolo: "Routing avanzato in Next.js",
  },
  { slug: "server-actions", titolo: "Come funzionano le Server Actions" },
  {
    slug: "react-server-components",
    titolo: "Guida ai React Server Components",
  },
  {
    slug: "deploy-vercel",
    titolo: "Come deployare un progetto Next.js su Vercel",
  },
  {
    slug: "ottimizzazione-immagini",
    titolo: "Ottimizzazione delle immagini in Next.js",
  },
  {
    slug: "middleware-nextjs",
    titolo: "Middleware in Next.js: cosa sono e come usarli",
  },
  { slug: "next-auth", titolo: "Autenticazione con NextAuth.js" },
];
// Simuliamo un elenco di articoli del blog

export default function BlogHome() {
  return (
    <div>
      {articoli.map((a) => (
        <Link key={a.slug} href={`/blog/${a.slug}`}>
          {a.titolo}
        </Link>
      ))}
    </div>
  );
}
