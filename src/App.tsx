import DropdownMenus from './Components/DropdownMenus';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navigation from './Components/Navigation';
import SideBar from './Components/SideBar';
import Status from './Components/Status';
import Work from './Components/Work';

function App() {
  return (
    <>
      <div className="bg-mysecondary w-screen overflow-hidden">
        <Navigation />
        <DropdownMenus />
        <SideBar />
        <Hero />
        <Features />
        <Status />
        <Work />
        <Footer />
      </div>
    </>
  );
}

export default App;
