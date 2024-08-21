import DisplayHome from "../components/DisplayHome"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OpenSource from "../components/OpenSource"

const Home = () => {
  return (
    <div>
        <Navbar />
        <DisplayHome />
        <Features />
        <OpenSource />
        <Footer />
    </div>
  )
}

export default Home