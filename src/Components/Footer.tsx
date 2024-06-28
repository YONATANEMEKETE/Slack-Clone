import WaveBg from './ui/WaveBg';

const Footer = () => {
  return (
    <div className="relative  h-screen pt-12 pb-12">
      <div className="absolute top-0 w-full left-0 -z-10">
        <WaveBg />
      </div>
      <div className="relative">
        <div>See All You Can Accomplish with Slack</div>
      </div>
    </div>
  );
};

export default Footer;
