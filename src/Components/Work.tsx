import { ArrowRight } from 'lucide-react';

const Work = () => {
  return (
    <div className="w-screen  bg-mysection pt-12 pb-12">
      <div className="text-xl md:text-3xl text-black font-logo font-extrabold w-max mx-auto mb-8">
        Take A deeper Dive into A new way to Work
      </div>
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 min-[1230px]:grid-cols-4 gap-4 w-max mx-auto">
        <div className="h-[65vh] p-4  bg-mysecondary w-[18rem] shadow-xl hover:scale-110 transition-all duration-500 flex flex-col items-start justify-between">
          <div>
            <div className="bg-mysection w-full  h-[25vh] mb-2"></div>
            <p className="font-normal font-semibold text-gray-600">Event</p>
            <div className="text-[1.25rem] font-logo font-extrabold text-black mb-20">
              Ready for the future of AI in Slack?
            </div>
          </div>
          <div className="flex items-center justify-between text-mycard1 font-logo font-bold cursor-pointer">
            <p>Watch on Demand</p>
            <ArrowRight />
          </div>
        </div>
        <div className="h-[65vh] p-4 bg-mysecondary w-[18rem] shadow-xl hover:scale-110 transition-all duration-500 flex flex-col items-start justify-between">
          <div>
            <div className="bg-mysection w-full  h-[25vh] mb-2"></div>
            <p className="font-normal font-semibold text-gray-600">Blog</p>
            <div className="text-[1.25rem] font-logo font-extrabold text-black">
              10 Features to know(to love) on Slack's 10th Birthday
            </div>
          </div>
          <div className="flex items-center justify-between text-mycard1 font-logo font-bold cursor-pointer">
            <p>Read More</p>
            <ArrowRight />
          </div>
        </div>
        <div className="h-[65vh] p-4 bg-mysecondary w-[18rem] shadow-xl hover:scale-110 transition-all duration-500 flex flex-col items-start justify-between">
          <div>
            <div className="bg-mysection w-full  h-[25vh] mb-2"></div>
            <p className="font-normal font-semibold text-gray-600">
              Customer Story
            </p>
            <div className="text-[1.25rem] font-logo font-extrabold text-black mb-20">
              How OpenAI expand ChatGPT with Slack
            </div>
          </div>
          <div className="flex items-center justify-between text-mycard1 font-logo font-bold cursor-pointer">
            <p>Read More</p>
            <ArrowRight />
          </div>
        </div>
        <div className="h-[65vh] p-4 bg-mysecondary w-[18rem] shadow-xl hover:scale-110 transition-all duration-500 flex flex-col items-start justify-between">
          <div>
            <div className="bg-mysection w-full  h-[25vh] mb-2"></div>
            <p className="font-normal font-semibold text-gray-600">Webinar</p>
            <div className="text-[1.25rem] font-logo font-extrabold text-black mb-20">
              Top Slack Tips to boost Productivity
            </div>
          </div>
          <div className="flex items-center justify-between text-mycard1 font-logo font-bold cursor-pointer">
            <p>Read More</p>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
