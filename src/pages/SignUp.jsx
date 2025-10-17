
import Footer from "../components/footer/Footer"
import MainNav from "../components/head/MainNav"
import TopBanner from "../components/head/TopBanner"
import SignUpPage from "../components/login/SignUpPage"

function LogIn() {

  return (
    <div className="min-h-screen bg-white text-black">
      <TopBanner />
      <MainNav rightIcons={false}/>
      <main>
        <SignUpPage />
      </main>
      <Footer />
    </div>
  )
}

export default LogIn
