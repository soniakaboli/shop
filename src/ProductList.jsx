import Prodcard from "./Prodcard";
import products from "./data/Product";

function Productlist({ category }){
    const filteredProduct = category
    ? products.filter(p => p.category === category)
    : products;

    return(
        <div className="container mt-4">
            <div className="row g-4">
                {filteredProduct.map(product => (
                    <div key={product.id} className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <Prodcard product={product} /> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productlist;