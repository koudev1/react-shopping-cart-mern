import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Products/Product";

import data from "./data.json";
import Filter from "./components/Filter/Filter";

function App() {
    const [products, setProducts] = useState(data);
    const [size, setSize] = useState("");
    const [sort, setSort] = useState("");

    const handFilterBySize = (e) => {
        setSize(e.target.value);
        if (e.target.value == "ALL") {
            setProducts(data);
        } else {
            let productsClone = [...products];
            let newProducts = productsClone.filter(
                (p) => p.sizes.indexOf(e.target.value) != -1
            );
            setProducts(newProducts);
        }
    };

    const handFilterBySort = (e) => {
        let order = e.target.value;
        setSort(order);
        let productsClone = [...products];
        let newProducts = productsClone.sort(function (a, b) {
            if (order == "lowest") {
                return a.price - b.price;
            } else if (order == "highest") {
                return b.price - a.price;
            } else {    
                return a.id < b.id ? 1 : -1;
            }
        });
        setProducts(newProducts);
    };

    return (
        <>
            <div className="layout">
                <Header />
                <main>
                    <div className="wrapper">
                        <Product products={products} />
                        <Filter
                            size={size}
                            sort={sort}
                            handFilterBySize={handFilterBySize}
                            handFilterBySort={handFilterBySort}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
