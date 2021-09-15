import React from "react";

const items = [
  {
    id: 1,
    name: "overwatch",
    price: 20,
  },
  {
    id: 2,
    name: "minecraft",
    price: 32,
  },
  {
    id: 3,
    name: "fortnite",
    price: 51,
  },
];

const Shop1 = () => {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsToBuy = () =>
    items.map((item) => (
      <div key={item.id}>
        {`${item.name}: $${item.price}`}
        <br />
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          onClick={() => addToCart(item)}
        >
          Add
        </button>
      </div>
    ));

  const listItemsInCart = () =>
    items.map((item) => (
      <div key={item.id}>
        ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
        <button
          className="btn btn-sm btn-danger"
          style={{ marginLeft: 15, marginTop: 10 }}
          type="submit"
          onClick={() => removeFromCart(item)}
        >
          Remove
        </button>
      </div>
    ));

  return (
    <div>
      STORE
      <div>{listItemsToBuy()}</div>
      <hr />
      <div>CART</div>
      <div>{listItemsInCart()}</div>
      <hr />
      <div>
        <h1>Total: ${cartTotal}</h1>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={() => setCart([])}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Shop1;
