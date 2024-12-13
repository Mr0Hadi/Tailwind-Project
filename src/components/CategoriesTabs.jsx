

  function CategoriesTabs({ activeTab, onTabClick }) {
    const tabs = [
      { id: "panel-1", label: "هدفون" },
      { id: "panel-2", label: "میکروفون" },
      { id: "panel-3", label: "تجهیزات جانبی" },
    ];
  
    return (
      <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 md:space-x-10 md:flex-row-reverse">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex justify-center text-center cursor-pointer md:w-1/3 tab ${
              activeTab === tab.id ? "border-b-4 border-gray-400" : ""
            }`}
            data-target={tab.id}
            onClick={() => onTabClick(tab.id)}
          >
            <div className="py-5">{tab.label}</div>
          </div>
        ))}
      </div>
    );
  }
  

  export default CategoriesTabs