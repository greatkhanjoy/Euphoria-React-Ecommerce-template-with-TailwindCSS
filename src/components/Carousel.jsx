import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrival, Arrival2, Arrival3, Arrival4 } from "../assets/img";

const items = [
  {
    id: 1,
    img: Arrival,
    name: "Knitted Joggers",
  },
  {
    id: 2,
    img: Arrival2,
    name: "Full Sleeve",
  },
  {
    id: 3,
    img: Arrival3,
    name: "Active T-Shirts",
  },
  {
    id: 4,
    img: Arrival4,
    name: "Urban Shirts",
  },
  {
    id: 5,
    img: Arrival2,
    name: "Urban Shirts",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <BsArrowRight />,
    prevArrow: <BsArrowLeft />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 978,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="py-10 ">
      <div className="container">
        <div className="section_heading flex justify-start items-center gap-5">
          <div className="w-[7px] h-8 rounded-md bg-blueBar"></div>
          <h3 className="text-3xl font-core_sans_bold">New Arrival</h3>
        </div>
        <Slider {...settings} className="mt-14">
          {items.map((item) => (
            <div key={item.id} className="">
              <div className="w-full rounded-md overflow-hidden mb-8">
                <img
                  src={item.img}
                  alt="new Arrival"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-caustenbold text-center md:text-left">
                {item.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
