import React, { useState } from "react";
import ProductModal from "./ProductModal";

import "./../../css/Products/Products.css";

const Product = (props) => {
    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product);
    };

    const closeModal = () => {
        setProduct(false);
    };

    return (
        <>
            <div className="products">
                {props.products.map((product) => (
                    <div key={product.id} className="product-item">
                        <a href="#" onClick={() => openModal(product)}>
                            <img src={product.imageUrl} alt={product.title} />
                        </a>
                        <div className="product-desc">
                            <p>{product.title}</p>
                            <span>${product.price}</span>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                ))}

                <ProductModal product={product} closeModal={closeModal} />
            </div>
        </>
    );
};

export default Product;
