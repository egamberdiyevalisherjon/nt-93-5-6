import React from "react";
import ProductList from "../Components/ProductList";
import useFetch from "../Hooks/useFetch";
import { toast } from "react-toastify";
import ProductListPlaceholder from "../Components/ProductListPlaceholder";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
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
          <h2 className="my-3 display-2">
            {t("our-products", { name: "Eshmatjon" })}
          </h2>
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
