import Navigation from './Components/Navigation';
import SideBar from './Components/SideBar';
import FeatureDropDown from './Components/ui/FeatureDropDown';

function App() {
  return (
    <>
      <div className="bg-mysecondary">
        <Navigation />
        <FeatureDropDown />
        <SideBar />
      </div>
    </>
  );
}

export default App;
