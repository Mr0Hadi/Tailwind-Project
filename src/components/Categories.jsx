import { useState } from "react";
import CategoriesTabs from "./CategoriesTabs";
import CategoriesPanel from "./CategoriesPanel";
import HeaderSection from "./HeaderSection";

function Categories() {
  const panels = [
    {
      id: "panel-1",
      image: "images/headphone.png",
      title: "هدفون",
      description:
        "مثل تمام بلندگوها، هدفون نیز سیگنال الکترونیکی را به سیگنال آنالوگ تبدیل می‌کند. از هدفون‌ها برای پخش موسیقی، برقراری تماس تلفنی و فراخوانی دستیارهای شخصی همچون Siri ا برخی از هدفون‌ها نیز قابلیت حذف نویز و صداهای ناخواسته یا تقویت برخی دیگر از صداها را دارند. هدفون‌ها برخلاف بلندگوها، به گونه‌ای طراحی شده‌اند که تنها کاربر می‌تواند به صدا گوش فرا دهد",
    },
    {
      id: "panel-2",
      image: "images/mic.png",
      title: "میکروفون",
      description:
        "میکروفون‌های USB یکی از پیشرفت‌های جدید در فناوری میکروفون هستند و دارای تمام اجزای میکروفون‌های سنتی می‌باشند: کپسول، دیافراگم و غیره. تفاوت این میکروفون در داشتن دو مدار اضافی است: یک پری آمپلی فایر داخلی و یک مبدل آنالوگ به دیجیتال (A/D). پری آمپلی فایر اتصال میکروفون به میکسر یا پری آمپلی فایر میکروفون خارجی را غیرضروری می‌سازد",
    },
    {
      id: "panel-3",
      image: "images/stand.png",
      title: "تجهیزات جانبی",
      description:
        "ارتفاع این پایه براحتی قابل تنظیم است و به دلیل نوع ساختار آن و طراحی خاصِ بدنه در هر کجا که رها شود در همان جا فیکس باقی می ماند و همچنین قابلیت چرخش 360 درجه ای بدور خود را دارد. از این پایه بیشتر در استودیوهای دوبلاژ و برادکست استفاده می شود",
    },
  ];

  const [activeTab, setActiveTab] = useState("panel-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="categories">
      

      <HeaderSection headText="دسته بندی محصولات" subText="تجهیزات بروز استدیویی"/>

      <section>
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <CategoriesTabs activeTab={activeTab} onTabClick={handleTabClick} />
          <div id="panels" className="container mx-auto ">
            {panels.map((panel) => (
              <CategoriesPanel
                key={panel.id}
                image={panel.image}
                title={panel.title}
                description={panel.description}
                active={panel.id === activeTab}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
