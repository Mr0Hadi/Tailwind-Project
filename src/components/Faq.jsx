import HeaderSection from "./HeaderSection";

function Faq() {
  return (
    <div id="faq">
      <HeaderSection headText="سوالات متداول" subText="متن سوالات متداول" />

      <section>
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-4xl m-8 mx-auto overflow-hidden text-right">
            <div className="py-1 border-b outline-none group " tabindex="1">
              
              <div className="flex items-center justify-between py-3 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-focus:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
                <div className="text-xl">
                  چطور می‌توانم سفارشم را پیگیری کنم؟
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-lg text-right text-gray-200">
                  وارد سایت شوید. روی گزینه سفارش‌های من کلیک کنید. در این قسمت
                  با کلیک روی جزییات می‌توانید سفارش خود را ببینید. می‌توانید در
                  این قسمت روند آماده‌سازی و مراحل ارسال سفارش خود را پیگیری
                  کنید
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabindex="2">
              <div className="flex items-center justify-between py-3 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-focus:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
                <div className="text-xl">چطور میتوانم سفارشم را لغو کنم ؟</div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-lg text-right text-gray-200">
                  شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که
                  از ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده
                  روند لغو سفارش به توضیحات تکمیلی مراجعه کنید
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabindex="3">
              <div className="flex items-center justify-between py-3 transition duration-500 cursor-pointer group ease">
                <div className="transition duration-500 ease group-focus:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
                <div className="text-xl">
                  چطور درخواست خود را جهت بازگرداندن کالا اطلاع دهم؟
                </div>
              </div>

              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-lg text-right text-gray-200">
                  شما میتوانید از طریق فرم درخواست مرجوعی در حساب کاربری ، صفحه
                  تماس با ما و تلفن درخواست خود را ثبت نمایید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
