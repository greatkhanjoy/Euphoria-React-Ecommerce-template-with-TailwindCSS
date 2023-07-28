import { AiOutlineHeart } from "react-icons/ai";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div className="relative flex flex-col gap-5" key={product.id}>
          <div className="absolute top-5 right-5 bg-white rounded-full p-2">
            <AiOutlineHeart className="" />
          </div>
          <div className="text-black rounded-lg overflow-hidden w-full">
            <img src={product.img} alt="product" />
          </div>
          <div className="meta flex justify-between items-center">
            <div>
              <a href="/">
                <p className="font-caustenbold text-[#2A2f2f]">
                  {product.title}
                </p>
              </a>
              <a href="/" className="text-sm font-caustenmedium text-[#7f7f7f]">
                {product.brand}
              </a>
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
