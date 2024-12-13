function Newsletter() {
  return (
    <div className="bg-[#1b1b1b]">
      <div className="max-w-lg mx-auto py-24">
        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
          آخرین اخبار سایت
        </h2>
        <p className="max-w-lg mx-auto mb-8 text-center">
          برای اشتراک در خبرنامه لطفا ایمیل خود را وارد کنید
        </p>

        <form
          className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
        >
          <div
            className="flex flex-col-reverse justify-between items-center mx-auto md:flex-row md:mx-0"
          >
            <input
              type="submit"
              className="inline-flex px-6 py-2 mr-2 rounded-lg border-2 hover:bg-[#fafafa] hover:text-black cursor-pointer focus:outline-none"
              value="ارسال"
            />
            <input
              type="email"
              className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg text-black focus:outline-none md:mr-3 md:mb-0"
              placeholder="آدرس ایمیل"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
