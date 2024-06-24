import { ArrowRight, CloudDownload, Sparkle } from 'lucide-react';

const FeatureDropDown = () => {
  return (
    <div className="absolute z-40 top-[4.5rem] left-[10rem] rounded-md shadow-2xl drop-shadow-2xl flex items-start w-max pb-4">
      <div className="flex flex-col gap-y-12 px-4 pt-4">
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

      <div className="w-[12rem] h-full hello bg-mydropdown rounded-tr-md pt-4 px-4">
        <div>
          <p className="text-lg font-logo font-bold text-black mb-4">
            Featured
          </p>
          <img src="" className="" />
          <p className="text-sm font-logo  text-black mb-6">
            Bussinesses of All sizes are Working Faster with Slack
          </p>
          <div className="text-lg font-logo font-semibold text-mycard1 flex items-center gap-x-2 hover:underline cursor-pointer">
            <div>Learn More</div>
            <ArrowRight />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FeatureDropDown;
