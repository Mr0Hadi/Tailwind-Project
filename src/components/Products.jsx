import HeaderSection from "./HeaderSection";

function Products() {
  return (
    <div id="product-list">
      <HeaderSection headText="آخرین محصولات" subText="تنوع بهترین برندهای میکروفون و هدفون"/>

      <section className="my-16">
        <div className="relative flex flex-col items-center max-w-7xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
         
          <div className="flex flex-col text-center rounded-lg md:w-1/3 bg-[#1a1c1e]">
            <div className="flex ">
              <img className="rounded-t-lg" src="images/beats.png" />
            </div>
            <h5 className="mt-6 mb-2 text-2xl font-bold">Beats</h5>
            <div className="flex justify-center gap-1 text-gray-300 text-lg">
              <p>تومان</p>
              <p>۱۰۰۰</p>
            </div>
            <div className="px-6 pt-8 mb-8">
              <button
                className="py-3 px-4 text-white bg-[#343434] text-lg rounded-lg"
              >
                <a href="#">افزودن به سبد خرید</a>
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center rounded-lg md:w-1/3 bg-[#1a1c1e]">
            <div className="flex ">
              <img className="rounded-t-lg" src="images/airpods-max.png" />
            </div>
            <h5 className="pt-6 mb-2 text-2xl font-bold">Airpods Max</h5>
            <div className="flex justify-center gap-1 text-gray-300 text-lg">
              <p>تومان</p>
              <p>۱۰۰۰</p>
            </div>
            <div className="px-6 pt-8 mb-8">
              <button
                className="py-3 px-4 text-white bg-[#343434] text-lg rounded-lg"
              >
                <a href="#">افزودن به سبد خرید</a>
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center rounded-lg md:w-1/3 bg-[#1a1c1e]">
            <div className="flex justify-center">
              <img className="rounded-t-lg" src="images/rode.png" />
            </div>
            <h5 className="pt-6 mb-2 text-2xl font-bold">Rode</h5>
            <div className="flex justify-center gap-1 text-gray-300 text-lg">
              <p>تومان</p>
              <p>۱۰۰۰</p>
            </div>
            <div className="px-6 pt-8 mb-8">
              <button
                className="py-3 px-4 text-white bg-[#343434] text-lg rounded-lg"
              >
                <a href="#">افزودن به سبد خرید</a>
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center rounded-lg md:w-1/3 bg-[#1a1c1e]">
            <div className="flex justify-center">
              <img className="rounded-t-lg" src="images/shure.png" />
            </div>
            <h5 className="pt-6 mb-2 text-2xl font-bold">Shure</h5>
            <div className="flex justify-center gap-1 text-gray-300 text-lg">
              <p>تومان</p>
              <p>۱۰۰۰</p>
            </div>
            <div className="px-6 pt-8 mb-8">
              <button
                className="py-3 px-4 text-white bg-[#343434] text-lg rounded-lg"
              >
                <a href="#">افزودن به سبد خرید</a>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Products;
