import { useNavigate } from "react-router-dom";

function ProductTitle({ singleProductTitle }) {
  const navigate = useNavigate();
  async function handleNavigationToProductDetails(getProductDetailsById) {
    navigate(`/product-details/${getProductDetailsById}`)
  }
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img onClick={() => handleNavigationToProductDetails(singleProductTitle?.id)}
          src={singleProductTitle?.thumbnail}
          alt={singleProductTitle?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text:xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {singleProductTitle?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
          ₹{singleProductTitle?.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleNavigationToProductDetails(singleProductTitle?.id)}
        className="px-5 mt-5 w-full py-2 bg-black rounded-none text-white font-bold text-lg"
      >
        View Details
      </button>
    </div>
  );
}

export default ProductTitle;
