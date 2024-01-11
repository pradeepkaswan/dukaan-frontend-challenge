import { useLocation } from 'react-router-dom';
import {
  SearchIcon,
  HelpIcon,
  SpeakerIcon,
  DownIcon,
} from '@/common/media/icons';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/home':
        return 'Home';
      case '/payments':
        return 'Payments';
      default:
        return 'Home';
    }
  };

  return (
    <header className="flex-between gap-2 px-8 py-3 border-b border-[#D9D9D9] shadow sticky top-0 bg-[#FFFFFF]">
      <div className="flex gap-2 items-center">
        <h5 className="text-[#1A181E] font-normal text-xl pr-3">
          {getTitle()}
        </h5>
        <div className="flex items-center gap-2 text-[#4D4D4D] text-sm">
          <img src={HelpIcon} alt="help" />
          <p>How it works</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 w-[400px] bg-[#F2F2F2] rounded">
        <div className="text-lg">
          <img src={SearchIcon} alt="search" />
        </div>
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="flex gap-2 justify-end">
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 w-10 h-10 items-center justify-center">
          <img src={SpeakerIcon} alt="" />
        </button>
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 w-10 h-10 flex items-center justify-center">
          <img src={DownIcon} alt="down" />
        </button>
      </div>
    </header>
  );
};

export default Header;
