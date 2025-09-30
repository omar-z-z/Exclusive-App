import {  HeartIcon, CartIcon, UserIcon } from "../basicComponents/icons";
import Container from "../basicComponents/Container";
import IconBtn from "../basicComponents/IconBtn";


const MainNav = () => (
  <header className="border-b border-gray-200 bg-white">
    <Container className="flex h-16 items-center gap-4">
      <div className="text-2xl font-bold tracking-tight">Exclusive</div>
      <nav className="ml-8 hidden items-center gap-6 text-sm text-gray-700 md:flex">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Contact</a>
        <a href="#" className="hover:text-black">About</a>
        <a href="#" className="hover:text-black">Sign Up</a>
      </nav>
      <div className="ml-auto flex flex-1 items-center justify-end gap-3">
        <div className="relative hidden w-full max-w-[360px] items-center md:flex">
          <input className="w-full rounded-md border border-gray-200 bg-gray-100 py-2 pl-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-gray-300" placeholder="What are you looking for?" />
          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-3.5-3.5"/></svg>
        </div>
        <IconBtn label="Wishlist" icon={HeartIcon} />
        <IconBtn label="Cart" icon={CartIcon} />
        <IconBtn label="Account" icon={UserIcon} />
      </div>
    </Container>
  </header>
);

export default MainNav;