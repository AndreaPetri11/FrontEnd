function CartItem({ item, onUpdateQuantity }) {
  return (
    <>
      <h3>Name: {item.name}</h3>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
      <button onClick={()=>}></button>
      <p></p>
    </>
  );
}

export default CartItem;
