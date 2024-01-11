import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import UserImage from '@/common/media/images/user.png';
import { WalletIcon } from '@/common/media/icons';
import { navLinks } from './nav-links';

const Nav = () => {
  return (
    <aside className="fixed left-0 top-0 z-10 h-screen w-full overflow-hidden transition-all duration-300 pointer-events-all opacity-100">
      <div className="relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between translate-x-0">
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
            <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
              <img src={UserImage} alt="user" />
            </div>
            <div className="flex flex-col gap-1 w-[108px]">
              <h3 className="font-medium text-[15px]">Nishyan</h3>
              <Link
                to={'#'}
                className="underline underline-offset-2 text-[13px] font-light">
                Visit Store
              </Link>
            </div>
            <ChevronDown />
          </div>
          <div className="w-full flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10">
                <div className="object-contain object-center">
                  <img src={link.icon} />
                </div>
                <p className="text-[14px] font-medium">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded-[4px]">
          <div className="flex gap-3 items-center">
            <div className="w-[36px] h-[36px] bg-[#FFFFFF]/10 rounded-[4px] p-[6px]">
              <img src={WalletIcon} alt="wallet" />
            </div>

            <div className="flex flex-col text-white gap-[2px]">
              <h2 className="text-[13px]">Available credits</h2>
              <h6 className="text-base font-normal">222.10</h6>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Nav;
