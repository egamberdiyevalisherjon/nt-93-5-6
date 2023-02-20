import React from "react";
import ProductList from "../Components/ProductList";
import useFetch from "../Hooks/useFetch";
import { toast } from "react-toastify";
import ProductListPlaceholder from "../Components/ProductListPlaceholder";

const Products = () => {
  const { loading, data, isFetched, errors, isError } = useFetch(
    "/products",
    "get"
  );

  if (isError)
    errors.forEach((error) =>
      toast(error.response.data.error, { type: "error" })
    );

  return (
    isFetched && (
      <section>
        <div className="container-fluid">
          <h2 className="my-3 display-2">Our Products</h2>
          <div className="row g-5">
            {loading ? (
              <ProductListPlaceholder />
            ) : (
              <ProductList products={data} />
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default Products;
