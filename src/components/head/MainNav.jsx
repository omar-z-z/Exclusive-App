import { HeartIcon, CartIcon, UserIcon } from "../basicComponents/icons";
import Container from "../basicComponents/Container";
import IconBtn from "../basicComponents/IconBtn";
import { useState } from "react";
import MainNavButton from "./MainNavButton";

const MainNav = () => {
  const [clickedButton, setClickedButton] = useState("Home");
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = (e) => {
    console.log(searchText);
    // here we put the search function
    setSearchText("");
  };

  const handleClickButton = (e, item) => {
    e.preventDefault(); 
    setClickedButton(item);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="flex items-center h-16">
        <div className="flex-shrink-0 text-2xl font-extrabold tracking-tight">
          Exclusive
        </div>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-end gap-8 text-sm">
            {["Home", "Contact", "About", "Sign Up"].map((item) => {
              const isClicked = clickedButton === item;
              return (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => handleClickButton(e, item)}
                    className={`pb-2 ${
                      isClicked
                        ? "border-b-2 border-black font-medium"
                        : "text-gray-700 hover:text-black"
                    }`}
                    aria-current={isClicked ? "page" : undefined}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center">
            <label className="relative block">
              <input
                aria-label="search"
                placeholder="What are you looking for?"
                className="w-72 rounded-md bg-gray-100 px-4 py-2 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
                value={searchText}
                onChange={handleSearchChange}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                onClick={handleSearchClick}
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
