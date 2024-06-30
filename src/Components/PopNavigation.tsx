import Container from './Container';
import Slack from '../assets/Slack.png';
import { AlignJustify, ChevronDown, Search } from 'lucide-react';
import UseSidebar from '@/Services/SidebarStore';
import Button from './ui/Button';
import UseDropDown from '@/Services/FeatureDropdownStore';
import UseDropSolution from '@/Services/SolutionDropStore';
import UseDropPrice from '@/Services/PricingDrop';
import useSearchDrop from '@/Services/SearchDrop';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const { setSidebar } = UseSidebar();
  const { setDropdown, dropdown } = UseDropDown();
  const { dropdownSol, setDropSol } = UseDropSolution();
  const { dropdownPri, setDropPrice } = UseDropPrice();
  const { setSearchDrop } = useSearchDrop();
  const [popNav, setPopNav] = useState(true);

  const handlePopNav = () => {
    if (window.scrollY > 50) {
      // console.log(window.scrollY);
      setPopNav(false);
    } else {
      setPopNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handlePopNav);
    return () => {
      window.removeEventListener('scroll', handlePopNav);
    };
  }, []);

  const toggleFeatures = () => {
    if (!dropdownSol) {
      setDropSol();
    }

    if (!dropdownPri) {
      setDropPrice();
    }

    setDropdown();
  };

  const toggleSolutions = () => {
    if (!dropdown) {
      setDropdown();
    }
    if (!dropdownPri) {
      setDropPrice();
    }
    setDropSol();
  };

  const toggleResources = () => {
    if (!dropdownSol) {
      setDropSol();
    }
    if (!dropdown) {
      setDropdown();
    }
    setDropPrice();
  };

  return (
    <div className="">
      <Container
        className={`fixed z-20 ${
          popNav ? '-top-full' : 'min-[1020px]:top-4'
        }  w-full mx-auto min-[1020px]:left-4 min-[1020px]:right-4 inset-0 
      min-[1020px]:rounded-full  bg-mysecondary h-[5rem] px-6 pt-4 md:pt-8 lg:pt-4 transition-all duration-1000 ease-in-out`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2">
              <div className="logo size-8">
                <img src={Slack} className="" />
              </div>
              <div>
                <p className="text-2xl font-logo font-extrabold leading-[1.25rem]">
                  Slack
                </p>
                <p className="text-xs font-normal font-semibold">
                  from salesforce
                </p>
              </div>
            </div>

            <div className="hidden lg:flex gap-x-6">
              <div
                onClick={toggleFeatures}
                className="font-logo font-bold flex items-end gap-x-2 cursor-pointer"
              >
                <p>Features</p>
                <ChevronDown
                  className={`${
                    !dropdown && '-rotate-180'
                  } transition-all duration-500`}
                />
              </div>
              <div
                onClick={toggleSolutions}
                className="font-logo font-bold flex items-end gap-x-2 cursor-pointer"
              >
                <div>Solutions</div>
                <ChevronDown
                  className={`${
                    !dropdownSol && '-rotate-180'
                  } transition-all duration-500`}
                />
              </div>
              <p className="font-logo font-bold hover:underline cursor-pointer">
                Enterprise
              </p>
              <div
                onClick={toggleResources}
                className=" font-logo font-bold flex items-end gap-x-2 cursor-pointer"
              >
                <p>Resources</p>
                <ChevronDown
                  className={`${
                    !dropdownPri && '-rotate-180'
                  } transition-all duration-500`}
                />
              </div>
              <p className=" font-logo font-bold hover:underline cursor-pointer">
                Prices
              </p>
            </div>
          </div>

          <div className="flex items-center lg:gap-x-4 gap-x-6 lg:basis-1/3 justify-end">
            <div onClick={setSearchDrop} className="cursor-pointer">
              <Search />
            </div>

            <div className="w-max hover:underline cursor-pointer font-logo font-bold mr-4 hidden lg:block">
              Sign In
            </div>
            {/* large device navigation */}
            <div className="hidden lg:flex items-center gap-x-4 w-2/3">
              <Button
                variant="secondary"
                className="basis-1/2 "
                text="Talk to Slack"
              />
              <Button
                variant="primary"
                className="basis-1/2"
                text="Get Started"
              />
            </div>

            <div className="cursor-pointer lg:hidden" onClick={setSidebar}>
              <AlignJustify />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
