import UseDropDown from '@/Services/FeatureDropdownStore';
import { ArrowRight, CloudDownload, Sparkle } from 'lucide-react';
import slackpic from '../../assets/slackpic.jpg';

const FeatureDropDown = () => {
  const { dropdown } = UseDropDown();

  return (
    <div
      className={`${
        dropdown && 'opacity-0 -translate-y-80'
      } absolute -z-10 top-[4.5rem] left-[10rem] rounded-md shadow-2xl drop-shadow-2xl hidden
      lg:flex items-start w-max transition-all duration-500`}
    >
      <div className="flex flex-col gap-y-10 px-4 pt-4">
        <div className="flex items-start">
          <div className="space-y-4 w-[15rem]">
            <p className="text-lg font-logo font-bold text-black">
              Collaboration
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                  channels
                </p>
                <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                  Organize Teams and Works
                </p>
              </div>
              <div>
                <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                  Slack Connect
                </p>
                <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                  Work with External Partner
                </p>
              </div>
              <div>
                <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                  Messaging
                </p>
                <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                  Chat with your Team
                </p>
              </div>
              <div>
                <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                  Huddles
                </p>
                <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                  Meet with Audio and Video
                </p>
              </div>
              <div>
                <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                  Clips
                </p>
                <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                  Recorde and Share Updates
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 w-[15rem]">
            <div className="space-y-4">
              <p className="text-lg font-logo font-bold text-black">
                Automation
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Workflow builder
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Automate everyday Tasks
                  </p>
                </div>
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Apps & Integrations
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Bring your Tools to Slack
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-logo font-bold text-black">
                Knowledge
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Search
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Sekk Shadred knowledge
                  </p>
                </div>
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Canvas
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Create rich flexible docs
                  </p>
                </div>
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    File Sharing
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Bring Files to the flow of work
                  </p>
                </div>
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Lists
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Organise, Track and Manage Projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 w-[15rem]">
            <div className="space-y-4">
              <p className="text-lg font-logo font-bold text-black">
                Intelgence
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer flex items-center gap-x-2">
                    <Sparkle className="size-4" />
                    <div>Slack AI</div>
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Save time and work smarter with powerfull and simple AI
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-logo font-bold text-black">
                Enterprize Platform
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Security
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Protect Data, Ensure Compliance
                  </p>
                </div>
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Enterprize key Managment
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Monitor and Revoke Access
                  </p>
                </div>
                <div>
                  <p className="font-normal hover:text-mycard1 hover:underline cursor-pointer">
                    Slack Atlas
                  </p>
                  <p className="text-xs font-semibold font-normal text-gray-500 hover:text-mycard1">
                    Discover rich Profiles and Org Charts
                  </p>
                </div>
              </div>
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

      <div className="w-[14rem] h-full bg-mydropdown rounded-e-md pt-4 pb-[3.75rem] px-4">
        <div className="pb-8 border-b border-slate-500">
          <p className="text-lg font-logo font-bold text-black mb-4">
            Featured
          </p>
          <img src={slackpic} className="mb-4" />
          <p className="text-sm font-logo  text-black mb-6">
            Bussinesses of All sizes are Working Faster with Slack
          </p>
          <div className="text-lg font-logo font-semibold text-mycard1 flex items-center gap-x-2 hover:underline cursor-pointer">
            <div>Learn More</div>
            <ArrowRight />
          </div>
        </div>

        <div className="pt-8 px-2 space-y-4">
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            What is Slack?
          </p>
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Slack Vs Email
          </p>
          <p className="text-black font-logo font-semibold text-sm hover:underline hover:text-mycard1 cursor-pointer">
            Accessebility
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDropDown;
