import Button from './ui/Button';
import Airbnb from '../assets/Airbnb.png';
import Nasa from '../assets/Nasa.png';
import Etsy from '../assets/Etsy.png';

const Hero = () => {
  return (
    <div className="w-full h-screen pt-6 md:pt-12 px-4 text-center">
      <div className="text-[2rem] md:text-[3rem] font-logo font-extrabold leading-snug mb-4 px-6">
        Made for people.{' '}
        <span className="text-myaccent">Built for productivity.</span>
      </div>

      <div className="w-full  flex lg:block mb-6">
        <Button
          variant="primary"
          text="Get Started"
          className="w-full basis-full lg:px-10 py-4 mx-auto"
        />
      </div>

      <div className="font-normal text-black font-semibold w-fit mx-auto mb-10">
        Slack is free to try for as long as you'd like.
      </div>

      <div className="w-2/3 lg:w-1/2 mx-auto space-x-4 grid items-center justify-center grid-cols-3 min-[800px]:grid-cols-6 gap-4 justify-items-center">
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
    </div>
  );
};

export default Hero;
