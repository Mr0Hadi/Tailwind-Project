function Intro() {
  return (
    <section>
      <div className="container mx-auto h-screen flex flex-col p-6 lg:flex-row lg:mb-0">
        <div className="mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <img
            src="../../images/shure-intro.png"
            className="rounded-xl lg:top-24 xl:top-0"
          />
        </div>
        <div className="flex flex-col space-y-10 mt-16 lg:w-1/2">
          <h1 className="text-right font-semibold text-2xl lg:text-5xl ">
            عنوان نوشته
          </h1>
          <p className="text-right text-lg text-gray-300 lg:text-2xl lg:mt-0 lg:mx-0 ">
            متن نوشته
          </p>

          <div className="flex flex-row justify-end w-full space-x-4">
            <a href="#" className="text-base p-3 border-2 rounded-lg hover:text-black hover:bg-[#fafafa]">بررسی خرید</a>
            <a href="#" className="text-base p-3 border-2 rounded-lg text-black bg-[#fafafa]">مشاهده محصولات</a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
