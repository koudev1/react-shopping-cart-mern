import React from "react";

const Input = (props) => {
    return (
        <div>
            <label htmlFor="">{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                required
            />
        </div>
    );
};

export default Input;
