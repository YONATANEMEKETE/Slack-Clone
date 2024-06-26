import { CloudDownload, ArrowRight } from 'lucide-react';
import slackpic from '../assets/slackpic.jpg';
import UseDropSolution from '@/Services/SolutionDropStore';

const SolutionDropMenu = () => {
  const { dropdownSol } = UseDropSolution();

  return (
    <div
      className={`${
        dropdownSol && 'opacity-0 -translate-y-80'
      } fixed z-10 top-[4.5rem] left-[18rem] rounded-md shadow-2xl drop-shadow-2xl hidden
  lg:flex items-start w-max transition-all duration-500 bg-white`}
    >
      <div className="flex flex-col gap-y-44 px-4 pr-16 pt-4">
        <div className="flex items-start">
          <div className="space-y-4 w-[15rem]">
            <p className="text-lg font-logo font-bold text-black">
              By Department
            </p>
            <div className="space-y-4">
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Engienering
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                IT
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Custome Services
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Sales
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Project Management
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Marketing
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Human resources
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Services
              </p>
            </div>
          </div>

          <div className="space-y-4 w-[15rem]">
            <p className="text-lg font-logo font-bold text-black">
              By Industry
            </p>
            <div className="space-y-4">
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Technology
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Media
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Small Bussiness
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Financial Services
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Retail
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Education
              </p>
              <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1 hover:underline">
                Health and Life Services
              </p>
            </div>
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

      <div className="w-[14rem] h-full hello bg-mydropdown rounded-e-md pt-4 px-4">
        <div className="pb-8 border-b border-slate-500">
          <p className="text-lg font-logo font-bold text-black mb-4">
            Featured
          </p>
          <img src={slackpic} className="mb-4" />
          <p className="text-sm font-logo  text-black mb-6">
            How OPEN AI Connects customers and expand ChatGpt with Slack
          </p>
          <div className="text-lg font-logo font-semibold text-mycard1 flex items-center gap-x-2 hover:underline cursor-pointer">
            <div>Read Story</div>
            <ArrowRight />
          </div>
        </div>

        <div className="pt-8 px-2 pb-4 space-y-4">
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Task Managment
          </p>
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Scale
          </p>
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Engagment
          </p>
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Trust
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionDropMenu;
