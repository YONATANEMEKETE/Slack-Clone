import slackpic from '../assets/slackpic.jpg';
import { CloudDownload, ArrowRight } from 'lucide-react';
import UseDropPrice from '@/Services/PricingDrop';

const PricingDropDown = () => {
  const { dropdownPri } = UseDropPrice();

  return (
    <div
      className={`${
        dropdownPri && 'opacity-0 -translate-y-80'
      } fixed z-10 top-[4.5rem] left-[18rem] rounded-md shadow-2xl drop-shadow-2xl hidden
lg:flex items-start w-max transition-all duration-500 bg-white`}
    >
      <div className="flex flex-col gap-y-40 px-4 pr-16 pt-4">
        <div className="flex items-start">
          <div className="space-y-4 w-[12rem]">
            <p>Resources Libraries</p>
            <p>Events</p>
            <p>Customer Stories</p>
            <p>Blog</p>
          </div>
          <div className="space-y-4 w-[12rem]">
            <p>Whats New</p>
            <p>Developers</p>
            <p>Community</p>
            <p>App Directory</p>
          </div>
          <div className="space-y-4 w-[12rem]">
            <p>Watch Demo</p>
            <p>Partners</p>
            <p>Slack Certified</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className=" font-logo font-semibold text-mycard1 hover:underline cursor-pointer pr-4 border-r">
            Watch Demo
          </div>
          <div className=" font-logo font-semibold text-mycard1 hover:underline cursor-pointer flex items-center gap-x-2">
            <div>Download Slack</div>
            <CloudDownload />
          </div>
        </div>
      </div>

      <div className="w-[14rem] h-full hello bg-mydropdown rounded-e-md pt-2 px-4">
        <div className="pb-4 border-b border-slate-500">
          <p className="text-lg font-logo font-bold text-black mb-4">
            Featured
          </p>
          <img src={slackpic} className="mb-4" />
          <p className="text-sm font-logo  text-black mb-2">
            Discover the Features of AI at Dreamforce 2023
          </p>
          <div className=" font-logo font-semibold text-mycard1 flex items-center gap-x-2 hover:underline cursor-pointer">
            <div>Watch on-Demand</div>
            <ArrowRight />
          </div>
        </div>

        <div className="pt-4 px-2 pb-4 space-y-4">
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Help Center
          </p>
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Customer Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingDropDown;
