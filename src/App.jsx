import TopBanner from "./components/head/TopBanner"
import MainNav from "./components/head/MainNav"
import Hero from "./components/hero/Hero"
import FlashSales from "./components/flashSales/FlashSales"
import BrowseByCategory from "./components/browsebyCategory/BrowseByCategory"
import BestSelling from "./components/bestSelling/BestSelling"
import ExploreProducts from "./components/exploreProducts/ExploreProducts"
import FeatureTiles from "./components/featureTiles/FeatureTiles"
import Benefits from "./components/benefits/Benefites"
import Newsletter from "./components/footer/Newsletter"
import Footer from "./components/footer/Footer"
import "./App.css"

function App() {

  return (
    <div className="min-h-screen bg-white text-black">
      <TopBanner />
      <MainNav />
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <ExploreProducts />
      <FeatureTiles />
      <Benefits />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
}

export default App
