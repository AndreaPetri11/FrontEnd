import "./ShoppingList.css";

function ShoppingList({ items }) {
  return (
    <section className="shopping-list">
      <h2>La Mia Lista della Spesa contiene ({items.length} elementi)</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;

//KEY={CHIAVEUNICA}DEVE ESSERCI UNA CHIAVE UNICA
//POSSO USARE L'ID O UN NOME CHE DEVE ESSERE PERO' UNIVOCO!
