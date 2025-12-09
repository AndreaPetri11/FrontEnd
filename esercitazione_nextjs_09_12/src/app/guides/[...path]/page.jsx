import { guides } from "@/lib/guides";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return guides.map((guide) => ({ path: guide.path }));
}

export default async function GuidePage({ params }) {
  const { path } = await params;
  const pathVerify = path.join("/");
  const guide = guides.find(
    (guide) =>
      guide.path.length === path.length && guide.path.join("/") === pathVerify
  );

  if (!guide) {
    notFound();
  }
  return (
    <div>
      <h1>{guide.title} </h1>
      <p>{guide.description}</p>
      <p>{guide.content}</p>
    </div>
  );
}
