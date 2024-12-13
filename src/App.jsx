import Categories from "./components/Categories"
import Faq from "./components/Faq"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Products from "./components/Products"

function App() {
  return (
    <div className="scroll-smooth text-right">
      <Navbar/>
      <Intro/>
      <Products/>
      <Categories/>
      <Faq/>
      <Newsletter/>
    </div>
  )
}

export default App