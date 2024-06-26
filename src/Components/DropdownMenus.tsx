import PricingDropDown from './PricingDropDown';
import SearchDropDown from './SearchDropDown';
import SolutionDropMenu from './SolutionDropMenu';
import FeatureDropDown from './ui/FeatureDropDown';

const DropdownMenus = () => {
  return (
    <>
      <FeatureDropDown />
      <SolutionDropMenu />
      <PricingDropDown />
      <SearchDropDown />
    </>
  );
};

export default DropdownMenus;
