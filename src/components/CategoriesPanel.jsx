
function CategoriesPanel({image, title, description, active }) {
  return (
    <div
      className={`flex-col py-5 md:flex-row-reverse md:space-x-7 panel ${
        active ? "flex" : "hidden"
      }`}
    >
      <div className="flex justify-center md:w-1/2">
        <img src={image} className="relative w-2/3 rounded-lg" />
      </div>
      <div className="flex flex-col space-y-8 md:w-1/3 text-right">
        <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-right">
          {title}
        </h3>
        <p className="text-center md:text-right">{description}</p>
        <div className="mx-auto md:mx-0">
          <a
            href="#"
            className="px-6 py-3 mt-4 border-2 border-[#fafafa] rounded-lg md:inline-flex hover:bg-white hover:text-black hover:border-2"
          >
            بیشتر
          </a>
        </div>
      </div>
    </div>
  );
}


export default CategoriesPanel