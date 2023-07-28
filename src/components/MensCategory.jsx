import {
  MenOne,
  MenTwo,
  MenThree,
  MenFour,
  MenFive,
  MenSix,
  MenSeven,
  MenEight,
} from "../assets/img";
import CategoryGrid from "./CategoryGrid";

const categories = [
  {
    id: 1,
    img: MenOne,
    title: "Shirts",
  },
  {
    id: 2,
    img: MenTwo,
    title: "Printed T-Shirts",
  },
  {
    id: 3,
    img: MenThree,
    title: "Plain T-Shirt",
  },
  {
    id: 4,
    img: MenFour,
    title: "Polo T-Shirt",
  },
  {
    id: 5,
    img: MenFive,
    title: "Hoodies & Sweetshirt",
  },
  {
    id: 6,
    img: MenSix,
    title: "Jeans",
  },
  {
    id: 7,
    img: MenSeven,
    title: "Activewear",
  },
  {
    id: 8,
    img: MenEight,
    title: "Boxers",
  },
];

const MensCategory = () => {
  return (
    <section className="my-20 ">
      <div className="container">
        <div className="section_heading flex justify-start items-center gap-5">
          <div className="w-[7px] h-8 rounded-md bg-blueBar"></div>
          <h3 className="text-3xl font-core_sans_bold">Categories For Men</h3>
        </div>
        <div className="mt-10">
          <CategoryGrid categories={categories} />
        </div>
      </div>
    </section>
  );
};

export default MensCategory;
