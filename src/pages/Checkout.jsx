import CheckoutBody from "../components/checkout/checkoutBody"
import Footer from "../components/footer/Footer"
import MainNav from "../components/head/MainNav"
import TopBanner from "../components/head/TopBanner"

function Checkout() {

  return (
    <div className="min-h-screen bg-white text-black">
      <TopBanner />
      <MainNav />
      <main>
        <CheckoutBody />
      </main>
      <Footer />
    </div>
  )
}

export default Checkout
