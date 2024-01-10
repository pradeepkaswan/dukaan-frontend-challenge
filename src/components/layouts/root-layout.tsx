import { Outlet } from 'react-router-dom'
import Nav from '../sections/nav'
import Header from '../sections/header'

export default function RootLayout() {
  return (
    <div className="bg-background flex relative">
      <Nav />
      <div className="w-full pl-[224px]">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
