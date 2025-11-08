function ProdCard({ product }) {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price.toLocaleString()}</p>
        <button className="btn btn-light text-danger btn-sm  px-2 py-1 shadow ">
          🛒 افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ProdCard;