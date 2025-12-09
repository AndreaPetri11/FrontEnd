import { guides } from "@/lib/guides";

export default async function GuidePage({ params }) {
  const { path } = await params;
  const pathVerify = path.join("/");
  const guide = guides.find((guide) => guide.path.join("/") === pathVerify);

  return (
    <div>
      <h1>{guide.title} </h1>
      <p>{guide.description}</p>
      <p>{guide.content}</p>
    </div>
  );
}
