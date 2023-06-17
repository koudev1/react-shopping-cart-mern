import React, { useState } from "react";

import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutFrom/Checkout";

const Cart = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");

    const submitOrder = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

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
                                <p>Price: ${item.price * item.qty}</p>
                            </div>
                            <button onClick={() => props.removeFromCart(item)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {props.cartItems.length !== 0 && (
                <div className="cart-footer">
                    <div className="total">
                        Total Price: $
                        {props.cartItems.reduce((acc, p) => {
                            return acc + p.price * p.qty;
                        }, 0)}
                    </div>
                    <button onClick={() => setShowForm(true)}>
                        Select Product
                    </button>
                </div>
            )}

            <Checkout
                showForm={showForm}
                setShowForm={setShowForm}
                submitOrder={submitOrder}
                handleChange={handleChange}
            />
        </div>
    );
};

export default Cart;
