import React from "react";

import ProductCard from "../components/ProductCard";

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '80px',
    padding: '10px',
    margin: '20px',
    borderRadius: '5px',
};

const ItemListContainer = ({ productsData }) => {
    return (

        <div style={containerStyle}>
            {productsData.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard productData={product} />
                    </div>
                );
            })}
        </div>

    );
};

export default ItemListContainer;