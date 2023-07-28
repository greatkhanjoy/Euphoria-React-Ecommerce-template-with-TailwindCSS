import {
  LimeLightOne,
  LimeLightTwo,
  LimeLightThree,
  LimeLightFour,
} from "../assets/img";
import ProductGrid from "./ProductGrid";

const products = [
  {
    id: 1,
    img: LimeLightOne,
    title: "Black Sweatshirt with ....",
    brand: "Jhanvi’s  Brand",
    price: 123,
  },
  {
    id: 2,
    img: LimeLightTwo,
    title: "line Pattern Black H...",
    brand: "AS’s  Brand",
    price: 37,
  },
  {
    id: 3,
    img: LimeLightThree,
    title: "Black Shorts",
    brand: "MM’s  Brand",
    price: 37,
  },
  {
    id: 4,
    img: LimeLightFour,
    title: "Levender Hoodie with ....",
    brand: "Nike’s  Brand",
    price: 119,
  },
];

const LimeLight = () => {
  return (
    <section className="my-20 ">
      <div className="container">
        <div className="section_heading flex justify-start items-center gap-5">
          <div className="w-[7px] h-8 rounded-md bg-blueBar"></div>
          <h3 className="text-3xl font-core_sans_bold">In The Limelight</h3>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
};

export default LimeLight;
