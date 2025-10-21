import FlashSales from "../components/flashSales/FlashSales"
import Footer from "../components/footer/Footer"
import MainNav from "../components/head/MainNav"
import TopBanner from "../components/head/TopBanner"
import ProductDetails from "../components/productDetailsPage/ProductDetails"


function HomePage() {

  return (
    <div className="min-h-screen bg-white text-black">
      <TopBanner />
      <MainNav />
      <ProductDetails />
      <Footer />
    </div>
  )
}

export default HomePage
