import React from "react";

import "../../css/Cart/Cart.css";

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="cart-title">
                {" "}
                {props.cartItems.length === 0 ? (
                    "Cart Is Empty"
                ) : (
                    <p> there is {props.cartItems.length} products in cart</p>
                )}{" "}
            </div>
            <div className="cart-items">
                {props.cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="cart-decs">
                            <div>
                                <p>Title: {item.title}</p>
                                <p>QTY: {item.qty}</p>
                                <p>Price: {item.price}</p>
                            </div>
                            <button onClick={() => props.removeFromCart(item)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
