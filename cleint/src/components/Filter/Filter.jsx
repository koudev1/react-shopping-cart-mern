import React from "react";
import Fade from "react-reveal/Fade";

import "../../css/Filter/Filter.css";

const Filter = (props) => {
    return (
        <Fade right>
            <div className="filters">
                <div className="filter-title">Filter</div>
                <div className="num-products">
                    Number of products {props.productsNumber}
                </div>
                <div className="filter-by-size">
                    <span>Filter</span>
                    <select
                        className="filter-select"
                        value={props.size}
                        onChange={props.handFilterBySize}
                    >
                        <option value="ALL">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div className="filter-by-size">
                    <span>Order</span>
                    <select
                        className="filter-select"
                        value={props.sort}
                        onChange={props.handFilterBySort}
                    >
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>
        </Fade>
    );
};

export default Filter;
