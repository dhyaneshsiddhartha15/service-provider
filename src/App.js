
import "./App.css";
import Category from "./components/Category";
import Navbar from "./components/common/Navbar";
import BlogSection from "./components/pages/BlogSection";
import Footer from "./components/pages/Footer";
import ServiceProviderLanding from "./components/pages/LandingPage";
import SectionScreen from "./components/pages/SectionScreen";
import ServicePage from "./components/pages/ServicePage";

function App() {

  return (
    <div>
      <Navbar/>
      <ServiceProviderLanding/>
<Category/>
<SectionScreen/>
<BlogSection/>
<Footer/>
    </div>
  );
}

export default App;
