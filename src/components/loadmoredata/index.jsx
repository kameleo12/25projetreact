import { useEffect, useState } from "react";
import "./styles.css"

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}&select=title,thumbnail`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) =>[...prevData,...result.products]);
                setLoading(false);
            }

        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {if(products && products.length === 100) setDisableButton(true)
    }, [products]);


    if (loading) {
        return <div>Attends zebi</div>;
    }

    return (
        <div className="containerloadmore">
            <div className="product-container">
                {products && products.length ?
                    products.map(item => (
                        <div key={item.id} className="product">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                            />
                            <p>{item.title}</p>
                        </div>
                    )) : null
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={()=> setCount(count+1)}>Load More Product</button>
                {disableButton ? <p>No More Product To Load</p> : null}
            </div>
        </div>
    );
}
