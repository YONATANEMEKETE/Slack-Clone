import DropdownMenus from './Components/DropdownMenus';
// import Hero from './Components/Hero';
import Navigation from './Components/Navigation';
import SideBar from './Components/SideBar';

function App() {
  return (
    <>
      <div className="bg-mysecondary">
        <Navigation />
        <DropdownMenus />
        <SideBar />
        {/* <Hero /> */}
      </div>
    </>
  );
}

export default App;
