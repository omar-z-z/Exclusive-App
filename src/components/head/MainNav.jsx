import { HeartIcon, CartIcon, UserIcon } from "../basicComponents/icons";
import Container from "../basicComponents/Container";
import IconBtn from "../basicComponents/IconBtn";

const MainNav = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="flex items-center h-16">
        <div className="flex-shrink-0 text-2xl font-extrabold tracking-tight">Exclusive</div>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-end gap-8 text-sm">
            <li>
              <a href="#" className="pb-2 border-b-2 border-black font-medium" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="pb-2 text-gray-700 hover:text-black">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="pb-2 text-gray-700 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="pb-2 text-gray-700 hover:text-black">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center">
            <label className="relative block">
              <input
                aria-label="search"
                placeholder="What are you looking for?"
                className="w-72 rounded-md bg-gray-100 px-4 py-2 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-3.5-3.5" />
              </svg>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <IconBtn label="Wishlist" icon={HeartIcon} />
            <IconBtn label="Cart" icon={CartIcon} />
            <IconBtn label="Account" icon={UserIcon} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainNav;
