import Container from "../basicComponents/Container";
import { useState } from "react";
import qrcode from "../../assets/qrcode.svg";
import googlePlayBadge from "../../assets/google-play-badge.svg";
import appStoreBadge from "../../assets/download-on-the-app-store.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  const [emailText, setEmailText] = useState("");

  const handleEmailChange = (e) => setEmailText(e.target.value);
  const handleEmailClick = () => {
    console.log(emailText);
    setEmailText("");
  };

  return (
    <footer className="bg-black text-white mt-10">
      <Container className="grid grid-cols-3 lg:grid-cols-5 gap-4 py-6 border-b border-gray-700">
        <div className="col-span-3 lg:col-span-1">
          <div className="text-base lg:text-xl font-bold">Exclusive</div>
          <div className="mt-2 text-sm lg:text-lg font-medium">Subscribe</div>
          <p className="mt-1 text-xs lg:text-sm text-gray-400">
            Get 10% off your first order
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-1">
            <div className="relative py-1 pl-2 pr-6 rounded border border-white">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-black px-2 py-1 text-xs lg:text-sm text-white placeholder:text-gray-500 outline-none"
                value={emailText}
                onChange={handleEmailChange}
              />
              <svg
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleEmailClick}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4Z" />
              </svg>
            </div>
          </form>
        </div>

        <div className="col-span-1 mt-2 lg:mt-0">
          <div className="text-base lg:text-xl font-bold">Support</div>
          <ul className="mt-2 space-y-1 text-xs lg:text-sm text-gray-400">
            <li>
              Imam Ali St., Rafah,
              <br />
              Gaza, Palestine.
            </li>
            <li>
              <a href="mailto:exclusive@gmail.com" className="hover:text-white">
                exclusive@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+999888889999" className="hover:text-white">
                +999-88888-9999
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 mt-2 lg:mt-0">
          <div className="text-base lg:text-xl font-bold">Account</div>
          <ul className="mt-2 space-y-1 text-xs lg:text-sm text-gray-400">
            <li>
              <a href="" className="hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Login / Register
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 mt-2 lg:mt-0">
          <div className="text-base lg:text-xl font-bold">Quick Link</div>
          <ul className="mt-2 space-y-1 text-xs lg:text-sm text-gray-400">
            <li>
              <a href="" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="justify-center col-span-3 lg:col-span-1 mt-2 lg:mt-0 flex flex-row lg:flex-col items-center gap-3 lg:gap-1">
          <div className="text-base lg:text-lg font-bold">Download App</div>
          <p className="mt-1 text-xs lg:text-sm text-gray-400">Save $3 with App New User Only</p>

          <div className="mt-1 flex flex-row items-center gap-2 lg:gap-2">
            <div className="bg-white p-1">
              <img className="w-24 h-auto sm:w-16 sm:h-16 lg:w-16 lg:h-16" src={qrcode} alt="QR Code" />
            </div>
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <img className="h-12 w-auto sm:h-8 lg:h-8" src={googlePlayBadge} alt="Google Play" />
              <img className="h-12 w-auto sm:h-8 lg:h-8" src={appStoreBadge} alt="App Store" />
            </div>
          </div>

          <div className="mt-2 flex flex-wrap sm:flex-row gap-1 sm:gap-2">
            {[facebook, twitter, instagram, linkedin].map((icon) => (
              <img alt={icon} className="h-4 w-4 md:h-6 md:w-6" key={icon} src={icon} />
            ))}
          </div>
        </div>
      </Container>

      <div className="py-2 text-center text-xs lg:text-sm text-gray-500">
        &copy; Copyright Omar 2025. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
