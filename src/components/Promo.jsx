import { promoTwo, promoOne } from "../assets/img";

const Promo = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container">
        <div className="flex flex-col  gap-10 md:flex-row md:justify-between ">
          <div
            className="bg-no-repeat bg-cover bg-center py-16 px-6 text-white w-full flex flex-col items-start gap-8 rounded-md overflow-hidden"
            style={{ backgroundImage: `url(${promoOne})` }}
          >
            <p className="font-core_sans_heavy">Low Price</p>
            <div>
              <h3 className="text-3xl font-core_sans_extrabold">
                High Coziness
              </h3>
              <p className="font-core_sans_medium">UPTO 50% OFF</p>
            </div>
            <a href="#" className="underline font-core_sans_heavy">
              Explore Items
            </a>
          </div>
          <div
            className="bg-no-repeat bg-cover bg-center py-16 px-6 text-white w-full flex flex-col items-start gap-8 rounded-md overflow-hidden"
            style={{ backgroundImage: `url(${promoTwo})` }}
          >
            <p className="font-core_sans_heavy">Beyoung Presents</p>
            <div>
              <h3 className="text-3xl font-core_sans_extrabold">
                Breezy Summer <br />
                Style
              </h3>
              <p className="font-core_sans_medium">UPTO 50% OFF</p>
            </div>
            <a href="#" className="underline font-core_sans_heavy">
              Explore Items
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
