
function HeaderSection({headText,subText }) {
  return (
    <section id="product-list">
        <div className="container mx-auto flex-col flex">
          <h2 className="mb-5 text-3xl font-semibold text-center">
            {headText}
          </h2>
          <p className="text-center">
            {subText}
          </p>
        </div>
      </section>
  )
}

export default HeaderSection