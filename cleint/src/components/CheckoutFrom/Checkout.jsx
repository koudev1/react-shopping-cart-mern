import React from "react";

import "../../css/CheckoutFrom/Checkout.css";
import Input from "../Input/Input";

const Checkout = (props) => {
    return (
        <>
            {props.showForm && (
                <div className="checkout-from">
                    <span
                        className="close-icon"
                        onClick={() => props.setShowForm(false)}
                    >
                        &times;
                    </span>
                    <form action="" onSubmit={props.submitOrder}>
                        <Input
                            label="Name"
                            type="text"
                            name="name"
                            onChange={props.handleChange}
                        />
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            onChange={props.handleChange}
                        />

                        <div>
                            <button type="submit">Checkout</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Checkout;
