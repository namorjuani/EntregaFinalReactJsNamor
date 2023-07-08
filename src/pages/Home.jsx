import React, { useContext, useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { ProductsData } from "../json/Products";
import { CartContext } from "../context/CartContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Home = () => {
  const state = useContext(CartContext);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState();


  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products");
    getDocs(productCollection)
      .then((snapshot) => {
        setProductsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.log("Error al obtener los documentos: ", error)
      });
  }, []);

  return (
    <div>
      <ItemDetailContainer productsData={ProductsData} />
    </div>
  );
};

export default Home;