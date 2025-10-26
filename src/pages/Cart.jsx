import CartBody from "../components/cart/CartBody"
import Footer from "../components/footer/Footer"
import MainNav from "../components/head/MainNav"
import TopBanner from "../components/head/TopBanner"

function Cart() {

  return (
    <div className="min-h-screen bg-white text-black">
      <TopBanner />
      <MainNav buttonClicked="Home" />
      <main>
        <CartBody />
      </main>
      <Footer />
    </div>
  )
}

export default Cart
