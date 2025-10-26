import { HeartIcon, CartIcon, UserIcon } from "../basicComponents/icons";
import Container from "../basicComponents/Container";
import IconBtn from "../basicComponents/IconBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainNav = ({rightIcons=true, buttonClicked="Home"}) => {
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState(buttonClicked);
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

    if (item === "Home") navigate("/");
    else if (item === "Contact") navigate("/contact");
    else if (item === "About") navigate("/about");
    else if (item === "Sign Up") navigate("/signup");
  };
  const handleWishB = () => {
    console.log("Wishlist clicked");
    // here we put the wishlist function
    navigate("/wishlist");
  };
  const handleCartB = () => {
    console.log("Cart clicked");
    // here we put the cart function
    navigate("/cart");
  };
  const handleAccountB = () => {
    console.log("Account clicked");
    // here we put the account function
    navigate("/login");
  };

  return (
    <header className="border-b border-gray-200 bg-white relative z-30">
      <Container className="flex items-center h-16">
        <button
          className="mr-2 md:hidden text-gray-700 hover:text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div className="flex-shrink-0 text-2xl font-extrabold tracking-tight">
          Exclusive
        </div>
        <nav
          className={`
            ${menuOpen ? "block" : "hidden"}
            absolute top-16 left-0 w-full bg-white border-t md:border-0 md:static md:flex md:items-center md:justify-center z-20
          `}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 text-sm p-4 md:p-0">
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
          {rightIcons && <div className="flex items-center gap-2">
            <IconBtn label="Wishlist" icon={HeartIcon} onClick={handleWishB} />
            <IconBtn label="Cart" icon={CartIcon} onClick={handleCartB} />
            <IconBtn label="Account" icon={UserIcon} onClick={handleAccountB} />
          </div>}
        </div>
      </Container>
    </header>
  );
};

export default MainNav;