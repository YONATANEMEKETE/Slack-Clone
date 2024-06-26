import PricingDropDown from './PricingDropDown';
import SearchDropDown from './SearchDropDown';
import SolutionDropMenu from './SolutionDropMenu';
import FeatureDropDown from './ui/FeatureDropDown';

const DropdownMenus = () => {
  return (
    <div className="">
      <FeatureDropDown />
      <SolutionDropMenu />
      <PricingDropDown />
      <SearchDropDown />
    </div>
  );
};

export default DropdownMenus;
