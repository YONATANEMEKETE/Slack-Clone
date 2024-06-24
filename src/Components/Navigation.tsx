import Container from './Container';
import Slack from '../assets/Slack.png';
import { AlignJustify, Search } from 'lucide-react';
import UseSidebar from '@/Services/SidebarStore';
import Button from './ui/Button';

const Navigation = () => {
  const { setSidebar } = UseSidebar();

  return (
    <div>
      <Container className="h-[4rem] px-6 pt-4 md:pt-8">
        <div className="flex items-center justify-between">
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

          <div className="flex items-center lg:gap-x-4 gap-x-6 lg:basis-1/3 justify-end">
            <div className="cursor-pointer">
              <Search />
            </div>

            <div className="w-max hover:underline cursor-pointer font-logo font-bold mr-4 hidden lg:block">
              Sign In
            </div>
            {/* large device navigation */}
            <div className="hidden lg:flex items-center gap-x-4 w-2/3">
              <Button
                variant="secondary"
                className="basis-1/2"
                text="Talk to Slack"
              />
              <Button
                variant="primary"
                className="basis-1/2"
                text="Get Started"
              />
            </div>

            <div className="cursor-pointer lg:hidden" onClick={setSidebar}>
              <AlignJustify />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
