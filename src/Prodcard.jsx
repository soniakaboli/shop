function ProdCard({product}){
    return(
        <div className="card h-100">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default ProdCard