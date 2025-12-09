import Image from "next/image";
//import doh from "../assets/doh.jpg";

export default function Notfound() {
  return (
    <>
      <p>"Pagina non trovata"</p>
      <Image src="/doh.jpg" height={250} width={200} alt="doh" />
    </>
  );
}
