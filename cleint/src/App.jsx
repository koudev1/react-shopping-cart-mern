import React, {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Products/Product";


import data from "./data.json";


function App() {
    const [products, setProducts] = useState(data);


    return (
        <>
            <div className="layout">
                <Header />
                <main>
                    <div className="wrapper">
                        <Product products={products} />
                        <div className="filters"> Filter </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
