import { useState } from "react";
import { motion } from "framer-motion";
import {
  BsChevronUp as ChevronUp,
  BsChevronRight,
  BsChevronDown,
} from "react-icons/bs";

const categories = [
  {
    id: 1,
    name: "Classic",
    href: "/",
  },
  {
    id: 2,
    name: "Casual",
    href: "/",
  },
  {
    id: 3,
    name: "Business",
    href: "/",
  },
  {
    id: 4,
    name: "Sport",
    href: "/",
  },
  {
    id: 5,
    name: "Elegant",
    href: "/",
  },
  {
    id: 6,
    name: "Formal (evening)",
    href: "/",
  },
];

const StyleFilter = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* Widget Header  */}
      <div className="border border-border border-t-0 px-7 py-5 flex justify-between items-center">
        <p className="text-lg font-caustenbold text-secondary leading-tight">
          Dress Style
        </p>
        <button onClick={() => setShow(!show)}>
          {show ? (
            <ChevronUp className="text-lg cursor-pointer" />
          ) : (
            <BsChevronDown className="text-lg cursor-pointer" />
          )}
        </button>
      </div>
      {/* End Widget Header  */}

      {/* Widget Body  */}
      <motion.div
        initial={{ display: "none" }}
        animate={{
          display: show ? "block" : "none",
        }}
        transition={{ duration: 0.5 }}
        className="border border-border border-t-0 px-7 py-5"
      >
        <ul className="flex flex-col gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={category.href}
                className="flex justify-between items-center"
              >
                <span className="font-caustensemi_bold text-secondary">
                  {category.name}
                </span>
                <BsChevronRight className="text-secondary" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default StyleFilter;
