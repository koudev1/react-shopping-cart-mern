import React from "react";
import Modal from "react-modal";

const ProductModal = (props) => {
    const { product,closeModal } = props;

    return (
        <Modal isOpen={product} onRequestClose={closeModal}>
            <span className="close-icon" onClick={closeModal}>
                &times;
            </span>
            <div className="product-details">
                <img src={product.imageUrl} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.decs}</p>
                <p>${product.prise}</p>
            </div>
        </Modal>
    );
};

export default ProductModal;
