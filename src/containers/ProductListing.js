import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Loading from "./Loading"

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://mocki.io/v1/df3b3b91-83ff-411c-813b-e680c0b5cc26")
   
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      {Object.keys(products).length === 0 ? (
       <Loading/>
     ) : (
      <ProductComponent />
     )}
    </div>
  );
};

export default ProductPage;