import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const userEmail = localStorage.getItem("userEmail");
      if (!userEmail) return;

      try {
        const res = await fetch(`http://localhost:9000/carts?email=${userEmail}`);
        const data = await res.json();
        if (data.length > 0) {
          setCartItems(data[0].items);
          setCartId(data[0].id);
        }
      } catch (err) {
        console.log(err);
        alert("خطا در دریافت سبد خرید");
      }
    };

    fetchCart();
  }, []);

  const removeItem = async (index) => {
    if (!cartId) return;
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);

    try {
      await fetch(`http://localhost:9000/carts/${cartId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems }),
      });
      setCartItems(updatedItems);
    } catch (err) {
      console.log(err);
      alert("خطا در حذف محصول");
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">سبد خرید شما</h2>
      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center border p-2 mb-2">
              <div>
                <h5>{item.name}</h5>
                <p>{item.price.toLocaleString()} تومان</p>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>
                حذف
              </button>
            </div>
          ))}
          <hr />
          <h4>جمع کل: {totalPrice.toLocaleString()} تومان</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;