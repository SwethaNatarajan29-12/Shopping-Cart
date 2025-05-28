import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../Context";

function CartTitle({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-60 h-60 max-sm:w-20 shrink-0 bg-gray-500 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-10">
            <h3 className="text-base font-bold text-gray-900">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="cursor-pointer mt-18 text-sm px-8 py-3 bg-black text-white font-extrabold rounded-lg"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-900">
            ₹{singleCartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-10 mb-3 font-bold text-[16px]">
            Quantity : {singleCartItem?.quantity}
          </p>
          <div className="mt-5 space-x-1">
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              className="cursor-pointer disabled:opacity-55 border border-[#000] w-12 h-10 rounded-sm"
              disabled={singleCartItem?.quantity == 1}
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="cursor-pointer border border-[#000] w-12 h-10  rounded-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </Fragment>
  );
}

export default CartTitle;
