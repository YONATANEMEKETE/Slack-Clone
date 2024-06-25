import DropdownMenus from './Components/DropdownMenus';
import Navigation from './Components/Navigation';
import SideBar from './Components/SideBar';

function App() {
  return (
    <>
      <div className="bg-mysecondary">
        <Navigation />
        <DropdownMenus />
        <SideBar />
      </div>
    </>
  );
}

export default App;
