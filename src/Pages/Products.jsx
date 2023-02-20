import React from "react";
import ProductList from "../Components/ProductList";
import useFetch from "../Hooks/useFetch";
import { toast } from "react-toastify";

const Products = () => {
  const { loading, data, isFetched, errors, isError } = useFetch(
    "/products",
    "get"
  );

  if (isError)
    errors.forEach((error) =>
      toast(error.response.data.message, { type: "error" })
    );

  return (
    isFetched && (
      <section>
        <div className="container-fluid">
          <h2 className="my-3 display-2">Our Products</h2>
          <div className="row g-5">
            {loading ? <h2>Loading...</h2> : <ProductList products={data} />}
          </div>
        </div>
      </section>
    )
  );
};

export default Products;
