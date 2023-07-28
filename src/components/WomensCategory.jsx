import { WomenOne, WomenTwo, WomenThree, WomenFour } from "../assets/img";
import CategoryGrid from "./CategoryGrid";

const categories = [
  {
    id: 1,
    img: WomenOne,
    title: "Hoodies & Sweetshirt",
  },
  {
    id: 2,
    img: WomenTwo,
    title: "Coats & Parkas",
  },
  {
    id: 3,
    img: WomenThree,
    title: "Tees & T-Shirt",
  },
  {
    id: 4,
    img: WomenFour,
    title: "Boxers",
  },
];

const WomensCategory = () => {
  return (
    <section className="my-20 ">
      <div className="container">
        <div className="section_heading flex justify-start items-center gap-5">
          <div className="w-[7px] h-8 rounded-md bg-blueBar"></div>
          <h3 className="text-3xl font-core_sans_bold">Categories For Women</h3>
        </div>
        <div className="mt-10">
          <CategoryGrid categories={categories} />
        </div>
      </div>
    </section>
  );
};

export default WomensCategory;
