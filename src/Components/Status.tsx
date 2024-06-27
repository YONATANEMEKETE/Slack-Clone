import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';
import Building from '../assets/status/Building.png';
import City from '../assets/status/City.png';
import Handshake from '../assets/status/Handshake.png';
import Lock from '../assets/status/Lock.png';
import Trade from '../assets/status/Trade.png';
import Working from '../assets/status/Working.png';

const Status = () => {
  return (
    <div className="relative pb-12 bg-mysecondary w-screen pt-16 md:pt-24 overflow-hidden">
      <div className="absolute top-12 left-36  hidden  rounded-full shadow-2xl bg-slate-100 xl:flex items-end gap-x-1  py-2 px-6">
        <img src={Building} className="size-8" />
        <p className="text-3xl font-semibold">11</p>
      </div>
      <div className="absolute top-[18rem] left-16  hidden  rounded-full shadow-2xl bg-slate-100 xl:flex items-end gap-x-1  py-2 px-6">
        <img src={Trade} className="size-8" />
        <p className="text-3xl font-semibold">5</p>
      </div>
      <div className="absolute top-80 left-80  hidden  rounded-full shadow-2xl bg-slate-100 xl:flex items-end gap-x-1  py-2 px-6">
        <img src={Lock} className="size-8" />
        <p className="text-3xl font-semibold">27</p>
      </div>
      <div className="absolute top-12 right-36  hidden  rounded-full shadow-2xl bg-slate-100 xl:flex items-end gap-x-1  py-2 px-6">
        <img src={City} className="size-8" />
        <p className="text-3xl font-semibold">12</p>
      </div>
      <div className="absolute top-60 right-44  hidden  rounded-full shadow-2xl bg-slate-100 xl:flex items-end gap-x-1  py-2 px-6">
        <img src={Handshake} className="size-8" />
        <p className="text-3xl font-semibold">9</p>
      </div>
      <div className="absolute top-[26rem] right-16  hidden  rounded-full shadow-2xl bg-slate-100 xl:flex items-end gap-x-1  py-2 px-6">
        <img src={Working} className="size-8" />
        <p className="text-3xl font-semibold">8</p>
      </div>
      <div className="w-full px-8 space-y-4 md:space-y-8 mb-16 lg:mb-24">
        <p className="text-3xl lg:text-[3rem] text-black font-logo font-extrabold text-center">
          Teams large and small rely on Slack.
        </p>
        <p className="text-lg text-black font-logo font-semibold text-center">
          Slack securely scales up to support collaboration at the worlds
          biggest companies
        </p>
        <div className="w-full md:w-[80%] min-[1100px]:w-1/2  flex flex-col md:flex-row gap-x-1 gap-y-4 mx-auto">
          <Button
            text="MEET SLACK FOR ENTERPRISE"
            variant="primary"
            className="py-4 mx-auto w-[80vw] md:basis-2/4"
          />
          <Button
            text="Talk To Sales"
            variant="secondary"
            className="py-4 mx-auto w-[80vw] md:basis-[40%]"
          />
        </div>
      </div>
      <div className="w-full lg:w-[80%] mx-auto flex items-center flex-col lg:flex-row justify-between gap-y-4 mb-12 lg:mb-24">
        <div className="w-[12rem] h-max mx-auto text-center ">
          <p className="text-[3rem] text-myaccent font-logo font-extrabold">
            85%
          </p>
          <p className=" text-black font-logo font-semibold">
            of users say Slack has improved communication
          </p>
        </div>
        <div className="w-[12rem] h-max mx-auto text-center ">
          <p className="text-[3rem] text-myaccent font-logo font-extrabold">
            86%
          </p>
          <p className=" text-black font-logo font-semibold">
            feel their ability to work remotely has improved
          </p>
        </div>
        <div className="w-[12rem] h-max mx-auto text-center ">
          <p className="text-[3rem] text-myaccent font-logo font-extrabold">
            88%
          </p>
          <p className=" text-black font-logo font-semibold">
            feel more connected to their teams
          </p>
        </div>
      </div>

      <div className=" w-screen flex flex-col min-[820px]:flex-row items-start min-[820px]:items-center  gap-y-12 justify-between">
        <div className="w-[90%] md:w-[45%] h-[40vh] lg:h-[60vh] bg-mycard3 rounded-e-full"></div>
        <div className="space-y-4 basis-[45%] mr-10 pl-8 min-[820px]:pl-0">
          <div className="text-xl lg:text-2xl font-normal font-bold">
            “Whether you’re a small or large organization, executing anything
            from a discrete modernization program to a digital transformation
            initiative, Slack is an incredibly powerful tool in the hybrid
            world.”
          </div>
          <div>
            <p className="text-black font-logo font-extrabold">
              Jennifer Quinlan
            </p>
            <p className="font-logo font-semibold">
              Managing Partner, IBM iX Americas Leader - Customer and Experience
              Transformation, IBM
            </p>
          </div>
          <div className="flex items-center gap-x-2 text-mycard1 hover:underline cursor-pointer font-normal font-semibold">
            <p>See more Customer stories</p>
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="w-full px-8 text-center text-sm font-logo font-semibold mt-8 lg:mt-16">
        * Weighted average. Based on 2,707 survey responses from weekly Slack
        users in the U.S., UK, Australia and Canada with a ± 2% margin of error
        at 95% CI (December 2021).
      </div>
    </div>
  );
};

export default Status;
