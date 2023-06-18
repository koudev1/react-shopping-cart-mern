import React, { useState } from "react";
import Fade from 'react-reveal/Fade';

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
        <Fade left cascade>
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
                        <button onClick={() => props.addToCart(product)}>
                            Add To Cart
                        </button>
                    </div>
                ))}

                <ProductModal product={product} closeModal={closeModal} />
            </div>
        </Fade>
    );
};

export default Product;
