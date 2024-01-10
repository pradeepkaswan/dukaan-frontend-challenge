import { navLinks } from '@/assets/data'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <aside className="fixed left-0 top-0 ">
      <div className="relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between translate-x-0">
        <div className="w-full flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to="/home"
              className="bg-[#FFFFFF]/10 px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
            >
              <div className="object-contain object-center">{link.icon}</div>
              <p className="text-[14px] font-medium">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Nav
