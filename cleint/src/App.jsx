import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Products/Product";


import data from "./data.json";
import Filter from "./components/Filter/Filter";


function App() {
    const [products, setProducts] = useState(data);


    return (
        <>
            <div className="layout">
                <Header />
                <main>
                    <div className="wrapper">
                        <Product products={products} />
                        <Filter />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
