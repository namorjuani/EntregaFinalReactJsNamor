import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartButtons = ({ productId }) => {
    const [state, setState] = useState(1);
    const { count, setCount } = useContext(CartContext);

    const handleMoreClick = () => {
        setState(state + 1);
    };

    const handleLessClick = () => {
        if (state > 1) {
            setState(state - 1);
        }
    };

    const addToCart = () => {
        const existingProductIndex = count.products.findIndex((p) => p.productId === productId);
        if (existingProductIndex !== -1) {
            // El producto ya existe en el carrito, actualiza su cantidad
            const updatedProducts = [...count.products];
            updatedProducts[existingProductIndex].qty += state;
            setCount((prevState) => ({
                ...prevState,
                qtyItems: prevState.qtyItems + state,
                products: updatedProducts,
            }));
        } else {
            // El producto no existe en el carrito, agrégalo como nuevo producto
            const newProduct = {
                productId,
                qty: state,
            };
            setCount((prevState) => ({
                ...prevState,
                qtyItems: prevState.qtyItems + state,
                products: [...prevState.products, newProduct],
            }));
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ margin: "10px" }}>
                <Button variant="outline-secondary" className="rounded-0" onClick={handleLessClick}>
                    -
                </Button>
                <span style={{ margin: "10px", fontSize: "18px" }}>{state}</span>
                <Button variant="outline-secondary" className="rounded-0" onClick={handleMoreClick}>
                    +
                </Button>
            </div>
            <Button onClick={addToCart}>Agregar al Carrito</Button>
        </div>
    );
};

export default CartButtons;