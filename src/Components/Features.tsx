import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <div className="w-screen pb-16 bg-mysection pt-[25rem] space-y-24">
      <div className=" w-screen flex flex-col min-[820px]:flex-row items-start min-[820px]:items-center gap-y-4 justify-between">
        <div className="w-[70%] md:w-[45%] h-[60vh] bg-mycard2 rounded-e-full"></div>
        <div className="space-y-4 basis-[45%] mr-10 pl-8 min-[820px]:pl-0">
          <div className="text-[3rem] font-logo font-extrabold text-black leading-tight w-[90%]">
            Move faster with your tools in one place
          </div>
          <p className="text-black font-normal font-semibold w-[90%]">
            Automate away routine tasks with the power of generative AI and
            simplify your workflow with all your favorite apps ready to go in
            Slack.
          </p>
          <div className="flex items-center gap-x-2 text-mycard1 hover:underline cursor-pointer font-normal font-semibold">
            <p>Learn More about The Slack Platform</p>
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className=" w-screen flex flex-col-reverse min-[820px]:flex-row items-end min-[820px]:items-center gap-y-4 justify-between">
        <div className="space-y-4 basis-[45%] ml-10 ">
          <div className="text-[3rem] font-logo font-extrabold text-black leading-tight w-[90%]">
            Choose how you want to work
          </div>
          <p className="text-black font-normal font-semibold w-[90%]">
            In Slack, you’ve got all the flexibility to work when, where and how
            it’s best for you. You can easily chat, send audio and video clips,
            or hop on a huddle to talk things out live.
          </p>
          <div className="flex items-center gap-x-2 text-mycard1 hover:underline cursor-pointer font-normal font-semibold">
            <p>Learn More about flexible Communication</p>
            <ArrowRight />
          </div>
        </div>
        <div className="w-[70%] md:w-[45%] h-[60vh] bg-mycard3 rounded-s-full"></div>
      </div>

      <div className=" w-screen flex flex-col min-[820px]:flex-row items-start min-[820px]:items-center  gap-y-4 justify-between">
        <div className="w-[70%] md:w-[45%] h-[60vh] bg-mycard1 rounded-e-full"></div>
        <div className="space-y-4 basis-[45%] mr-10 pl-8 min-[820px]:pl-0">
          <div className="text-[3rem] font-logo font-extrabold text-black leading-tight w-[90%]">
            Bring your team together
          </div>
          <p className="text-black font-normal font-semibold w-[90%]">
            At the heart of Slack are channels: organized spaces for everyone
            and everything you need for work. In channels, it’s easier to
            connect across departments, offices, time zones and even other
            companies.
          </p>
          <div className="flex items-center gap-x-2 text-mycard1 hover:underline cursor-pointer font-normal font-semibold">
            <p>Learn More about channels</p>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
