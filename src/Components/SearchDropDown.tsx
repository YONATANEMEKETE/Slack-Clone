import Container from './Container';
import Slack from '../assets/Slack.png';
import { Search, X } from 'lucide-react';
import Button from './ui/Button';
import useSearchDrop from '../Services/SearchDrop';

const SearchDropDown = () => {
  const { searchDrop, setSearchDrop } = useSearchDrop();
  return (
    <Container
      className={`${
        searchDrop ? '-top-full' : 'top-4'
      } fixed z-40  inset-x-0 lg:inset-x-4 w-full h-[5rem] bg-mysecondary rounded-none lg:rounded-full shadow-2xl px-8 flex items-center 
      transition-all duration-500 ease-in-out`}
    >
      <div className="logo hidden lg:flex items-start gap-x-4 basis-1/6">
        <div className="flex items-center gap-x-2">
          <div className="logo size-8">
            <img src={Slack} className="" />
          </div>
          <div>
            <p className="text-2xl font-logo font-extrabold leading-[1.25rem]">
              Slack
            </p>
            <p className="text-xs font-normal font-semibold">from salesforce</p>
          </div>
        </div>
        <div>
          <Search className="size-6" />
        </div>
      </div>

      <div className="lg:basis-4/6 basis-5/6 h-[3.5rem] lg:-mr-10 mr-6 px-4 pt-4 space-y-2 shadow-lg rounded-lg">
        <div className="w-full flex items-center justify-between">
          <input
            type="text"
            placeholder="Find Everything(ie. Channels, emoji or Change Password)"
            className="w-5/6 border-none outline-none font-semibold font-logo"
          />
          <div onClick={setSearchDrop} className="cursor-pointer relative">
            <X />
          </div>
        </div>

        <div className="w-full border-t border-slate-500"></div>
      </div>

      <div className="basis-1/6 flex justify-end">
        <Button
          text="Search"
          variant="secondary"
          className="px-6 justify-self-end"
        />
      </div>
    </Container>
  );
};

export default SearchDropDown;
