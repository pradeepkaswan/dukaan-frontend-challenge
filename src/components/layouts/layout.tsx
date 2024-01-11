import { Outlet } from 'react-router-dom';
import Nav from '../sections/nav/nav';
import Header from '../sections/header';

export default function Layout() {
  return (
    <div className="flex relative">
      <Nav />
      <div className="w-full pl-[224px]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
