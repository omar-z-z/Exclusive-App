import Benefits from "../components/benefits/Benefites"
import BestSelling from "../components/bestSelling/BestSelling"
import BrowseByCategory from "../components/browsebyCategory/BrowseByCategory"
import ExploreProducts from "../components/exploreProducts/ExploreProducts"
import FeatureTiles from "../components/featureTiles/FeatureTiles"
import FlashSales from "../components/flashSales/FlashSales"
import Footer from "../components/footer/Footer"
import MainNav from "../components/head/MainNav"
import TopBanner from "../components/head/TopBanner"
import Hero from "../components/hero/Hero"


function HomePage() {

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
      <Footer />
    </div>
  )
}

export default HomePage
