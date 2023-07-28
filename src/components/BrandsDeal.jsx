import {
  BrandOne,
  BrandTwo,
  BrandThree,
  BrandFour,
  BrandFive,
} from "../assets/img";

const BrandsDeal = () => {
  return (
    <section className="my-20">
      <div className="container bg-primary rounded-lg py-10">
        <div className="text-center text-white mb-14">
          <h2 className="font-core_sans_heavy text-4xl">Top Brands Deal</h2>
          <p className="text-lg font-caustenmedium">
            Up To <span className="text-orangeText">60%</span> off on brands
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center mb-5">
          <a
            href="/"
            className="bg-white rounded-xl h-16 px-3 py-1 overflow-hidden"
          >
            <img
              src={BrandOne}
              alt="brand"
              className="bg-white rounded-xl h-16 px-3 py-1 overflow-hidden"
            />
          </a>
          <a href="/">
            <img
              src={BrandTwo}
              alt="brand"
              className="bg-white rounded-xl h-16 px-3 py-1 overflow-hidden"
            />
          </a>
          <a href="/">
            <img
              src={BrandThree}
              alt="brand"
              className="bg-white rounded-xl h-16 px-3 py-1 overflow-hidden"
            />
          </a>
          <a href="/">
            <img
              src={BrandFour}
              alt="brand"
              className="bg-white rounded-xl h-16 px-3 py-1 overflow-hidden"
            />
          </a>
          <a href="/">
            <img
              src={BrandFive}
              alt="brand"
              className="bg-white rounded-xl h-16 px-3 py-1 overflow-hidden"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandsDeal;
