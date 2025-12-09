const prodotti = {
  elettronica: {
    "01": {
      id: "elettronica-01",
      nome: "Laptop Pro",
      prezzo: "999€",
      categoria: "elettronica",
      descrizione: "Laptop professionale con processore ad alte prestazioni.",
      disponibile: true,
      rating: 4.7,
      tags: ["laptop", "portatile", "premium"],
    },
    "02": {
      id: "elettronica-02",
      nome: "Smartphone X",
      prezzo: "799€",
      categoria: "elettronica",
      descrizione: "Smartphone di ultima generazione con fotocamera avanzata.",
      disponibile: true,
      rating: 4.5,
      tags: ["smartphone", "mobile"],
    },
    "03": {
      id: "elettronica-03",
      nome: "Cuffie Wireless",
      prezzo: "149€",
      categoria: "elettronica",
      descrizione: "Cuffie senza fili con cancellazione attiva del rumore.",
      disponibile: false,
      rating: 4.3,
      tags: ["audio", "wireless"],
    },
  },

  casa: {
    "01": {
      id: "casa-01",
      nome: "Aspirapolvere Turbo",
      prezzo: "199€",
      categoria: "casa",
      descrizione: "Aspirapolvere potente per una pulizia profonda.",
      disponibile: true,
      rating: 4.6,
      tags: ["pulizia", "aspirapolvere"],
    },
    "02": {
      id: "casa-02",
      nome: "Lampada LED",
      prezzo: "29€",
      categoria: "casa",
      descrizione: "Lampada LED a basso consumo energetico.",
      disponibile: true,
      rating: 4.2,
      tags: ["illuminazione", "led"],
    },
  },

  sport: {
    "01": {
      id: "sport-01",
      nome: "Bicicletta Mountain",
      prezzo: "499€",
      categoria: "sport",
      descrizione: "Mountain bike robusta per percorsi outdoor.",
      disponibile: false,
      rating: 4.8,
      tags: ["bicicletta", "outdoor", "mountain bike"],
    },
    "02": {
      id: "sport-02",
      nome: "Pallone da calcio",
      prezzo: "25€",
      categoria: "sport",
      descrizione: "Pallone da calcio professionale.",
      disponibile: true,
      rating: 4.1,
      tags: ["calcio", "sport"],
    },
  },
};

export default async function Prodotto({ params }) {
  const { category, id } = await params;
  const item = prodotti[category]?.[id];

  if (!item) return <p>Prodotto non trovato</p>;

  return (
    <div>
      <h1>{item.nome}</h1>
      <p>{item.prezzo}</p>
    </div>
  );
}
