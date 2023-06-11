import React from "react";

import "./../../css/Products/Products.css";

const Product = (props) => {
    return (
        <>
            <div className="products">
                {props.products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="product-desc">
                            <p>{product.title}</p>
                            <spanp>{product.price}</spanp>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;
