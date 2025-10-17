
import Footer from "../components/footer/Footer"
import MainNav from "../components/head/MainNav"
import TopBanner from "../components/head/TopBanner"
import LogInPage from "../components/login/LogInPage"

function LogIn() {

  return (
    <div className="min-h-screen bg-white text-black">
      <TopBanner />
      <MainNav rightIcons={false}/>
      <main>
        <LogInPage />
      </main>
      <Footer />
    </div>
  )
}

export default LogIn
