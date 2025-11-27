import { useState } from "react";

export function ShoppingCart() {
  // State per gestire il carrello
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Logica per aggiungere prodotti
  const addItem = (product) => {
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };

  // Calcolo del totale
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        🛒 Carrello ({items.length})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          {items.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
              <div className="cart-total">Totale: €{total.toFixed(2)}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
