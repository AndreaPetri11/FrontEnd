import Image from "next/image";
//metodo 2//import doh from "../../public/doh.jpg";

export default function Notfound() {
  return (
    <>
      <p>"Pagina non trovata"</p>
      <Image
        src="/doh.jpg"
        //src={doh} Metodo 2
        height={250}
        width={200}
        alt="doh"
      />
    </>
  );
}
