import "./Prodcard.css";



function ProdCard({ product }) {

  const addToCart = async () => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      alert("ابتدا وارد شوید!");
      return;
    }

    try {

      const res = await fetch(`http://localhost:9000/carts?email=${userEmail}`);
      const cartData = await res.json();

      if (cartData.length > 0) {

        const cart = cartData[0];
        cart.items.push(product);

        await fetch(`http://localhost:9000/carts/${cart.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cart),
        });
      } else {

        await fetch("http://localhost:9000/carts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail, items: [product] }),
        });
      }

      alert("محصول به سبد خرید اضافه شد!");
    } catch (err) {
      console.log(err);
      alert("خطا در افزودن محصول به سبد خرید");
    }
  };

  return (
    <div className="card h-100 product-card">
      <img src={product.image} className="card-img-top" alt={product.name} />

      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="price">{product.price.toLocaleString()} تومان</p>

        <button  onClick={() => addToCart(product)} className="btn add-btn">
          🛒 افزودن
        </button>
      </div>
    </div>
  );
}

export default ProdCard;