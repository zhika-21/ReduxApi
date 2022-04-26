import React, { useEffect,useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Loading from "./Loading"
import Pagination from "./Pagination"

const ProductPage = () => {
  const [page, setPage] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(10);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://mocki.io/v1/7ddee532-4af3-4850-a997-02612c55437d")
      // setNumberOfPages(data?.results)
   
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
       <Pagination setPage={setPage} page={page}/>
   
    </div>
  );
};

export default ProductPage;