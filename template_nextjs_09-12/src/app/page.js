import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Benvenuto!</h1>
      <nav>
        <Link href="/blog">Blog</Link> <br />
        <Link href="/shop">Shop</Link>
        <br />
        <Link href="/docs/guida/installazione">Docs</Link>
      </nav>
    </div>
  );
}
