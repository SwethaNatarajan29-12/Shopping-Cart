import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchListOfProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    if (result && result?.products) {
      setListOfProducts(result?.products);
    }
  }

  function handleAddToCart(getProductDetails) {
    let copyCartItems = [...cartItems];
    let findIndexOfCurrentItem = copyCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );
    if (findIndexOfCurrentItem === -1) {
      copyCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
      copyCartItems[findIndexOfCurrentItem] = {
        ...copyCartItems[findIndexOfCurrentItem],
        quantity: copyCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (copyCartItems[findIndexOfCurrentItem].quantity + 1) *
          copyCartItems[findIndexOfCurrentItem].price,
      };
    }

    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
    navigate("/cart");
  }

  function handleRemoveFromCart(getProductDetails, isRemove) {
    let copyCartItems = [...cartItems];
    let findIndexOfCurrentItem = copyCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    if (isRemove) {
      copyCartItems.splice(findIndexOfCurrentItem, 1);
    } else {
      copyCartItems[findIndexOfCurrentItem] = {
        ...copyCartItems[findIndexOfCurrentItem],
        quantity: copyCartItems[findIndexOfCurrentItem].quantity - 1,
        totalPrice:
          (copyCartItems[findIndexOfCurrentItem].quantity - 1) *
          copyCartItems[findIndexOfCurrentItem].price,
      };
    }

    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
  }

  useEffect(() => {
    fetchListOfProducts();
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        handleRemoveFromCart,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContextProvider;
