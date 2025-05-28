import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import ProductTitle from "../ProductTitle";

function ProductList() {
  const {
    listOfProducts,
    loading,
    setLoading,
    productDetails,
    setProductDetails,
  } = useContext(ShoppingCartContext);
  if (loading) {
    return <h1>Loading Data...Please wait</h1>;
  }

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 lg:mt-10 lg:gap-8 lg:grid-cols-3">
          {listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((singleProductTitle) => (
              <ProductTitle singleProductTitle={singleProductTitle} />
            ))
          ) : (
            <h3> No Products Found </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
