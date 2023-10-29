import 'bootstrap/dist/css/bootstrap.min.css';
import { Navsocial } from './components/navsocial';
import NavScrollExample from './components/navBar';
import QuranCarousel  from './components/carsul';
import ImageGallery from "./components/opinions";
import Cards from './components/cards';
import AboutUs from './components/about us';
import Footer from './components/footer';



function App() {
  return (
    <nav>
      <Navsocial></Navsocial>
      <NavScrollExample></NavScrollExample>
      <QuranCarousel></QuranCarousel>
      <AboutUs></AboutUs>
      <Cards></Cards>
      <ImageGallery></ImageGallery>
      <Footer></Footer>
    </nav>
  )
}

export default App;
