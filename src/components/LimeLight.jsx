import { useRef } from "react";
import { useInView } from "framer-motion";

import ProductGrid from "./ProductGrid";

import { products, categories } from "../products.json";

const limelightProducts = products
  .filter((product) => {
    const category = categories.find(
      (category) => category.id === product.category
    );
    return category.parent === 14;
  })
  .slice(0, 4);

const LimeLight = ({ title = "In The Limelight" }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <section className="my-20 ">
      <div
        className="container"
        ref={ref}
        style={{
          transform: isInView ? "none" : "scale(1.5)",
          opacity: isInView ? 1 : 0,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="section_heading flex justify-start items-center gap-5">
          <div className="w-[7px] h-8 rounded-md bg-blueBar"></div>
          <h3 className="text-3xl font-core_sans_bold">{title}</h3>
        </div>
        <div className="mt-10">
          <ProductGrid products={limelightProducts} />
        </div>
      </div>
    </section>
  );
};

export default LimeLight;
