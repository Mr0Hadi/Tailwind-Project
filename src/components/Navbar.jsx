function Navbar() {
  return (
    <nav className="container mx-auto relative p-3">
      <div className="flex items-center justify-between space-x-20 my-5">
        <div className="flex">
          <img className="w-2/12" src="../../images/logo.png"></img>
          <span className="tracking-[.10rem] pl-2 pt-[.4rem] uppercase font-bold text-sm">
            shopping
          </span>
        </div>
        <div className="hidden md:flex text-base items-center space-x-9">
          <a href="#faq">سوالات متداول</a>
          <a href="#categories">دسته بندی ها</a>
          <a href="#product-list">محصولات</a>
          <a
            href="#"
            className="border-2 border-[#fafafa] px-6 py-1.5 rounded-lg hover:text-black hover:bg-[#fafafa]"
          >
            حساب کاربری
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
