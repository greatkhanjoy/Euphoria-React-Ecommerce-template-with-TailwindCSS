import { BsArrowDownShort } from "react-icons/bs";

import {
  savingOne,
  savingTwo,
  savingThree,
  SavingBigOne,
  SavingBigTwo,
} from "../assets/img";

const savingData = [
  {
    id: 1,
    img: savingOne,
    title: "Hawaiian <br/>Shirts",
    desc: "Dress up in summer vibe",
    discount: "UPTO 50% OFF",
    link: "#",
    button: "SHOP NOW",
    align: "start",
    color: "secondary",
  },
  {
    id: 2,
    img: savingTwo,
    title: "Printed <br/>T-Shirt",
    desc: "New Designs Every Week",
    discount: "UPTO 40% OFF",
    link: "#",
    button: "SHOP NOW",
    align: "end",
    color: "secondary",
  },
  {
    id: 3,
    img: savingThree,
    title: "Cargo <br/>Joggers",
    desc: "Move with style & comfort",
    discount: "UPTO 50% OFF",
    link: "#",
    button: "SHOP NOW",
    align: "end",
    color: "primary",
  },
];

const savingData2 = [
  {
    id: 1,
    img: SavingBigOne,
    title: "Urban <br/>Shirts",
    desc: "Live In Confort",
    discount: "FLAT 60% OFF",
    link: "#",
    button: "SHOP NOW",
    align: "end",
    color: "primary",
  },
  {
    id: 2,
    img: SavingBigTwo,
    title: "Oversized <br/>T-Shirt",
    desc: "Street Style Icon",
    discount: "FLAT 60% OFF",
    link: "#",
    button: "SHOP NOW",
    align: "end",
    color: "primary",
  },
];

const SavingZone = () => {
  return (
    <section className="py-10 ">
      <div className="container">
        <div className="section_heading flex justify-start items-center gap-5">
          <div className="w-[7px] h-8 rounded-md bg-blueBar"></div>
          <h3 className="text-3xl font-core_sans_bold">Big Saving Zone</h3>
        </div>
        {/* First Section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {savingData.map((item) => (
            <div
              key={item.id}
              className={`w-full rounded-md overflow-hidden bg-cover bg-no-repeat bg-center py-16 px-4 ${
                item.color === "primary" ? "text-primary" : "text-white"
              }`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div
                className={`flex flex-col gap-4 ${
                  item.align === "start"
                    ? "items-start text-start"
                    : "items-end text-right"
                }`}
              >
                <h4
                  className="text-2xl font-core_sans_bold leading-tight"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h4>
                <div
                  className={`w-full flex flex-col ${
                    item.align === "start" ? "items-start" : "items-end"
                  } gap-1`}
                >
                  <p className="text-sm font-caustensemi_bold">{item.desc}</p>
                  <p className="font-causten_bold">{item.discount}</p>
                </div>
                <div className="flex flex-col items-start">
                  <BsArrowDownShort className="text-3xl block mx-auto mb-5" />
                  <a
                    href={item.link}
                    className={`${
                      item.color === "primary"
                        ? "btn_sm_primary"
                        : "btn_sm_secondary"
                    } font-caustensemi_bold}`}
                  >
                    {item.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Last Section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
          {savingData2.map((item) => (
            <div
              key={item.id}
              className={`w-full rounded-md overflow-hidden  bg-cover bg-no-repeat bg-center py-16 px-16 ${
                item.color === "primary" ? "text-primary" : "text-white"
              }`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div
                className={`flex flex-col gap-4 ${
                  item.align === "start"
                    ? "items-start text-start"
                    : "items-end text-right"
                }`}
              >
                <h4
                  className="text-2xl font-core_sans_bold leading-tight"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h4>
                <div
                  className={`w-full flex flex-col ${
                    item.align === "start" ? "items-start" : "items-end"
                  } gap-1`}
                >
                  <p className="text-sm font-caustensemi_bold">{item.desc}</p>
                  <p className="font-causten_bold">{item.discount}</p>
                </div>
                <div className="flex flex-col items-start">
                  <BsArrowDownShort className="text-3xl block mx-auto mb-5" />
                  <a
                    href={item.link}
                    className={`${
                      item.color === "primary"
                        ? "btn_sm_primary"
                        : "btn_sm_secondary"
                    } font-caustensemi_bold}`}
                  >
                    {item.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavingZone;
