import './App.css'
import Navbar from './components/navbar/Navbar'
import Heading from './components/heading/Heading'
import Banner from './components/banners/Banner'
import Cardbox from './components/cardBox/Cardbox'
import Posters from './components/posters/Posters'
import SiteMap from './components/siteMap/SiteMap'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <div className='navBar'>
     <Navbar/>
    </div>
    <div className='main'>
     <Heading/>
     <Banner/>
     <Cardbox/>
     <Posters/>
    </div>
    <SiteMap/>
    <Footer/>
    </>
  )
}

export default App
