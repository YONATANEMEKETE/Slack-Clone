import WaveBg from './ui/WaveBg';
import Button from '../Components/ui/Button';
import { ChevronDown, ChevronRight, CloudDownload, Globe } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { FaTiktok } from 'react-icons/fa';
import Slack from '../assets/Slack.png';

const Footer = () => {
  return (
    <div className="relative w-screen  pt-12 min-[1020px]:pt-24 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <WaveBg />
      </div>
      <div className="mb-36 min-[920px]:mb-40 min-[1300px]:mb-48">
        <div
          className="relative z-10 w-[80vw] text-center mx-auto text-[2rem] min-[600px]:text-[2.5rem] min-[1100px]:text-[3rem]
       text-white font-logo font-extrabold min-[600px]:mb-4 min-[800px]:mb-12"
        >
          See All you can Accomplish with Slack
        </div>
        <div className="relative z-10 w-full min-[1020px]:w-[40vw]  mx-auto  px-8 min-[1020px]:px-0 flex flex-col min-[1020px]:flex-row items-stretch gap-4">
          <Button
            text="Get started"
            variant="secondary"
            className="self-stretch py-4  min-[1020px]:basis-1/2"
          />
          <Button
            text="Talk to Sales"
            variant="primary"
            className="self-stretch border border-white py-4 min-[1020px]:basis-1/2"
          />
        </div>
      </div>

      <div className="">
        <div className="w-max mx-auto flex items-center gap-x-2 cursor-pointer hover:text-mycard1 transition-all duration-300 mb-8">
          <Globe />
          <p className="text-lg font-logo font-bold">Change Region</p>
          <ChevronDown />
        </div>
        <div className="w-max mx-auto flex items-center gap-x-8 mb-12">
          <FaLinkedin className="size-6" />
          <FaFacebook className="size-6" />
          <AiFillInstagram className="size-6" />
          <FaTwitter className="size-6" />
          <IoLogoYoutube className="size-6" />
          <FaTiktok className="size-6" />
        </div>
        <div className=" mx-4 border-t mb-4 min-[1100px]:mb-12"></div>

        <div className="min-[1100px]:hidden">
          <div className="w-full flex flex-col items-start gap-y-8">
            <div className="flex w-full items-center justify-between pl-6 md:pl-10 pr-12">
              <p className="text-xl font-normal text-black ">Product</p>
              <ChevronRight />
            </div>
            <div className="flex w-full items-center justify-between pl-6 md:pl-10 pr-12">
              <p className="text-xl font-normal text-black ">Why Slack?</p>
              <ChevronRight />
            </div>
            <div className="flex w-full items-center justify-between pl-6 md:pl-10 pr-12">
              <p className="text-xl font-normal text-black ">Features</p>
              <ChevronRight />
            </div>
            <div className="flex w-full items-center justify-between pl-6 md:pl-10 pr-12">
              <p className="text-xl font-normal text-black ">Solutions</p>
              <ChevronRight />
            </div>
            <div className="flex w-full items-center justify-between pl-6 md:pl-10 pr-12">
              <p className="text-xl font-normal text-black ">Resources</p>
              <ChevronRight />
            </div>
            <div className="flex w-full items-center justify-between pl-6 md:pl-10 pr-12">
              <p className="text-xl font-normal text-black ">Company</p>
              <ChevronRight />
            </div>
          </div>

          <div className=" mx-4 border-t mt-4 mb-12"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            <div className="pl-8">
              <img src={Slack} className="size-12" />
            </div>
            <div className="flex items-center gap-x-2 pl-8 text-mycard1 font-normal font-semibold cursor-pointer">
              <p>Download Slack</p>
              <CloudDownload />
            </div>
            <div className="flex items-center gap-4 pl-8 text-sm font-bold text-gray-500">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Cookie Preferences</p>
            </div>
          </div>

          <div className="px-4 text-center text-sm text-gray-600 font-normal ">
            ©2024 Slack Technologies, LLC, a Salesforce company. All rights
            reserved. Various trademarks held by their respective owners.
          </div>
        </div>

        <div className="px-20 hidden min-[1100px]:block">
          <div className="flex items-start mb-10">
            <div className="basis-[18%]">
              <img src={Slack} className="size-12" />
            </div>

            <div className="flex items-start gap-x-16 basis-[90%]">
              <div className="space-y-4 basis-[25%]">
                <div className="space-y-4">
                  <p className="text-lg text-black font-logo font-bold">
                    Product
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Watch demo
                  </p>
                  <p className="text-sm font-normal text-gray-400">Pricing</p>
                  <p className="text-sm font-normal text-gray-400">
                    Paid vs Free
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Accessebility
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Futured Releases
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    ChannelLog
                  </p>
                  <p className="text-sm font-normal text-gray-400">Status</p>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-black font-logo font-bold">
                    Why Slack?
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Slack vs Email
                  </p>
                  <p className="text-sm font-normal text-gray-400">Pricing</p>
                  <p className="text-sm font-normal text-gray-400">
                    Enterprise
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Small Business
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Productivity
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Task Managmnet
                  </p>
                  <p className="text-sm font-normal text-gray-400">Scale</p>
                  <p className="text-sm font-normal text-gray-400">Trust</p>
                </div>
              </div>
              <div className="space-y-4 basis-[25%]">
                <p className="text-lg text-black font-logo font-bold">
                  Features
                </p>
                <p className="text-sm font-normal text-gray-400">Channels</p>
                <p className="text-sm font-normal text-gray-400">
                  Slack Connect
                </p>
                <p className="text-sm font-normal text-gray-400">
                  Workflow Builder
                </p>
                <p className="text-sm font-normal text-gray-400">Messaging</p>
                <p className="text-sm font-normal text-gray-400">Huddles</p>
                <p className="text-sm font-normal text-gray-400">Canvas</p>
                <p className="text-sm font-normal text-gray-400">Lists</p>
                <p className="text-sm font-normal text-gray-400">Clips</p>
                <p className="text-sm font-normal text-gray-400">Search</p>
                <p className="text-sm font-normal text-gray-400">
                  App and Integration
                </p>
                <p className="text-sm font-normal text-gray-400">Slack AI</p>
                <p className="text-sm font-normal text-gray-400">
                  File Sharing
                </p>
                <p className="text-sm font-normal text-gray-400">Security</p>
                <p className="text-sm font-normal text-gray-400">Enterprise</p>
                <p className="text-sm font-normal text-gray-400">
                  Key Managment
                </p>
                <p className="text-sm font-normal text-gray-400">Slack Atlas</p>
              </div>
              <div className="space-y-4 basis-[25%]">
                <p className="text-lg text-black font-logo font-bold">
                  Solutions
                </p>
                <p className="text-sm font-normal text-gray-400">Engeneering</p>
                <p className="text-sm font-normal text-gray-400">IT</p>
                <p className="text-sm font-normal text-gray-400">
                  Customer Service
                </p>
                <p className="text-sm font-normal text-gray-400">Sales</p>
                <p className="text-sm font-normal text-gray-400">
                  Project Managmnet
                </p>
                <p className="text-sm font-normal text-gray-400">Marketing</p>
                <p className="text-sm font-normal text-gray-400">Security</p>
                <p className="text-sm font-normal text-gray-400">Technology</p>
                <p className="text-sm font-normal text-gray-400">Media</p>
                <p className="text-sm font-normal text-gray-400">
                  Financial Service
                </p>
                <p className="text-sm font-normal text-gray-400">Retail</p>
                <p className="text-sm font-normal text-gray-400">
                  Public Sector
                </p>
                <p className="text-sm font-normal text-gray-400">
                  Health and Life Science
                </p>
                <p className="text-sm font-normal text-gray-400">
                  See All Solutions
                </p>
              </div>
              <div className="space-y-4 basis-[25%]">
                <p className="text-lg text-black font-logo font-bold">
                  Resources
                </p>
                <p className="text-sm font-normal text-gray-400">Help center</p>
                <p className="text-sm font-normal text-gray-400">What's new</p>
                <p className="text-sm font-normal text-gray-400">
                  Resources Library
                </p>
                <p className="text-sm font-normal text-gray-400">Slack Blog</p>
                <p className="text-sm font-normal text-gray-400">Community</p>
                <p className="text-sm font-normal text-gray-400">
                  Customer Stories
                </p>
                <p className="text-sm font-normal text-gray-400">Events</p>
                <p className="text-sm font-normal text-gray-400">Developers</p>
                <p className="text-sm font-normal text-gray-400">Partners</p>
                <p className="text-sm font-normal text-gray-400">
                  Partner offer
                </p>
                <p className="text-sm font-normal text-gray-400">
                  App directory
                </p>
                <p className="text-sm font-normal text-gray-400">
                  Slack Certified
                </p>
              </div>
              <div className="space-y-4 basis-[25%]">
                <p className="text-lg text-black font-logo font-bold">
                  Company
                </p>
                <p className="text-sm font-normal text-gray-400">About Us</p>
                <p className="text-sm font-normal text-gray-400">News</p>
                <p className="text-sm font-normal text-gray-400">Media Kit</p>
                <p className="text-sm font-normal text-gray-400">
                  Brand Center
                </p>
                <p className="text-sm font-normal text-gray-400">Careers</p>
                <p className="text-sm font-normal text-gray-400">Swag Store</p>
                <p className="text-sm font-normal text-gray-400">
                  Engeneering Blog
                </p>
                <p className="text-sm font-normal text-gray-400">Design Blog</p>
                <p className="text-sm font-normal text-gray-400">Contact Us</p>
              </div>
            </div>
          </div>

          <div className=" mx-4 border-t mb-4 min-[1100px]:mb-12"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-2  text-mycard1 font-normal font-semibold cursor-pointer">
                <p>Download Slack</p>
                <CloudDownload />
              </div>

              <div className="flex items-center gap-4  text-sm font-bold text-gray-500">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Cookie Preferences</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 font-normal basis-1/2 text-end">
              ©2024 Slack Technologies, LLC, a Salesforce company. All rights
              reserved. Various trademarks held by their respective owners.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
