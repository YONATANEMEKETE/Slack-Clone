import Button from './ui/Button';
import Airbnb from '../assets/Airbnb.png';
import Nasa from '../assets/Nasa.png';
import Etsy from '../assets/Etsy.png';

const Hero = () => {
  return (
    <div className="bg-transparent w-full h-[80vh] md:h-screen pt-6 md:pt-12 px-4 text-center">
      <div className="text-[2rem] md:text-[3rem] font-logo font-extrabold leading-snug mb-4 px-6 w-2/3 md:w-full mx-auto">
        Made for people.{' '}
        <span className="text-myaccent">Built for productivity.</span>
      </div>

      <div className="w-full px-12  flex lg:block mb-6">
        <Button
          variant="primary"
          text="Get Started"
          className="w-full min-[970px]:w-[15rem]  basis-full lg:px-10 py-4 mx-auto"
        />
      </div>

      <div className="font-normal text-black font-semibold w-fit mx-auto mb-10">
        Slack is free to try for as long as you'd like.
      </div>

      <div className="w-2/3 lg:w-1/2 mx-auto mb-8 space-x-4 grid items-center justify-center grid-cols-3 min-[800px]:grid-cols-6 gap-4 justify-items-center">
        <div className="inline-block ">
          <div className="w-max flex items-center gap-x-2">
            <img src={Airbnb} className="size-10" />
            <div className="text-mylogo text-xl font-extrabold font-logo">
              airbnb
            </div>
          </div>
        </div>

        <img src={Nasa} className="size-10 inline-block " />

        <div className="inline-block text-2xl font-logo font-extrabold">
          Uber
        </div>

        <div className="inline-block text-2xl font-logo font-extrabold col-span-2">
          TheNewyorkTimes
        </div>

        <img src={Etsy} className="size-10 inline-block" />
      </div>

      <div className="relative z-0 w-[85vw] lg:w-[70vw] aspect-video bg-myaccent mx-auto text-white text-xl font-bold rounded-lg pt-8">
        Video Mock Up
      </div>
    </div>
  );
};

export default Hero;
