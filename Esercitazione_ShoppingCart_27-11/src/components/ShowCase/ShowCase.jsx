import ProductDisplay from "../ProductDisplay/ProductDisplay";

function ShowCase({ prodotti }) {
  return (
    <div>
      <h2>Prodotti</h2>
      {prodotti.map((p) => (
        <ProductDisplay key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ShowCase;
