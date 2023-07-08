import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { ProductsData } from "../json/Products";
import { useParams } from "react-router-dom";
const Category = () => {
  const {categoryId} = useParams()

  const productsFilteredByCategory = ProductsData.filter(products => products.category === categoryId);

  return <ItemDetailContainer productsData={productsFilteredByCategory} />;
};

export default Category;