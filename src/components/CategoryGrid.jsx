const CategoryGrid = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category) => (
        <div className="flex flex-col gap-5 " key={category.id}>
          <div className="text-black rounded-lg overflow-hidden w-full">
            <img src={category.img} alt="product" className="w-full" />
          </div>
          <div className="meta">
            <p className="font-caustenbold text-[#2A2f2f]">{category.title}</p>
            <a href="/" className="text-sm font-caustenmedium text-[#7f7f7f]">
              Explore Now!
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
