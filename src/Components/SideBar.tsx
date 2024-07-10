import Slack from '../assets/Slack.png';
import { ChevronRight, X } from 'lucide-react';
import Button from './ui/Button';
import UseSidebar from '../Services/SidebarStore';

type LinkProp = {
  text: string;
  icon?: React.ReactNode;
};

const Links = ({ text, icon }: LinkProp) => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="text-lg font-logo font-bold hover:text-mycard1 transition-colors duration-500">
        {text}
      </div>
      <div>{icon}</div>
    </div>
  );
};

const SideBar = () => {
  const { sidebar, setSidebar } = UseSidebar();

  return (
    <div
      className={`${
        sidebar && 'right-0'
      } fixed top-0 -right-full w-full h-screen z-20 bg-white pt-2 pb-4 px-8 transition-all duration-500`}
    >
      <div className="flex items-start justify-between flex-col w-full h-full">
        <div className="w-full">
          <div className="flex items-center justify-between mb-8">
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

            <div className="cursor-pointer" onClick={setSidebar}>
              <X />
            </div>
          </div>

          <div className="space-y-4">
            <Links text="Features" icon={<ChevronRight />} />
            <Links text="Solutions" icon={<ChevronRight />} />
            <Links text="Enterprise" />
            <Links text="Resources" icon={<ChevronRight />} />
            <Links text="Pricing" />
            <Links text="Watch Demo" />
            <Links text="Sign In" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center gap-x-2">
          <Button
            variant="secondary"
            className="basis-1/2"
            text="Talk to Sales"
          />
          <Button
            variant="primary"
            className="basis-1/2"
            text="Download Slack"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
