import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { brands } from "../products.json";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div className="relative flex flex-col gap-5" key={product.id}>
          <div className="absolute top-5 right-5 bg-white rounded-full p-2">
            <AiOutlineHeart className="" />
          </div>
          <Link
            to={`/products/${product.id}`}
            className="text-black rounded-lg overflow-hidden w-full"
          >
            <img src={product.images[0]} alt="product" className="w-full" />
          </Link>
          <div className="meta flex justify-between items-center">
            <div>
              <Link to={`/products/${product.id}`}>
                <p className="font-caustenbold text-[#2A2f2f]">
                  {product.name}
                </p>
              </Link>
              <Link
                to={`/brands/${product.brand}`}
                className="text-sm font-caustenmedium text-[#7f7f7f]"
              >
                {brands.find((brand) => brand.id === product.brand).name}
              </Link>
            </div>
            <span className="px-5 py-1 bg-grayBG rounded-full text-sm">
              ${product.price}.00
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
