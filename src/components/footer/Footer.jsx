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

  const handleEmailChange = (e) => {
    setEmailText(e.target.value);
  };

  const handleEmailClick = (e) => {
    console.log(emailText);
    // here we put the email function
    setEmailText("");
  };
  return (
    <footer className="bg-black text-white mt-20">
      <Container className="grid grid-cols-2 gap-12 py-16 md:grid-cols-5 border-b border-gray-700">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold">Exclusive</div>
          <div className="mt-6 text-lg font-medium">Subscribe</div>
          <p className="mt-4 text-sm text-gray-400">
            Get 10% off your first order
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-4">
            <div className="relative py-2 pl-2 pr-7 rounded border border-white ">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-black px-0 py-1 text-sm text-white placeholder:text-gray-500 outline-none"
                value={emailText}
                onChange={handleEmailChange}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleEmailClick}
                width="24"
                height="24"
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

        <div className="md:col-span-1">
          <div className="text-xl font-bold">Support</div>
          <ul className="mt-6 space-y-4 text-sm text-gray-400">
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
              <a href="tel:+88015888889999" className="hover:text-white">
                +999-88888-9999
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xl font-bold">Account</div>
          <ul className="mt-6 space-y-4 text-sm text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <div className="text-xl font-bold">Quick Link</div>
          <ul className="mt-6 space-y-4 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold">Download App</div>
          <p className="mt-6 text-xs text-gray-400">
            Save $3 with App New User Only
          </p>

          <div className="mt-4 flex items-center gap-2">
            <div className="bg-white p-1">
              <img width="80" height="80" src={qrcode} alt="QR Code"></img>
            </div>

            <div className="flex flex-col gap-2">
              <img
                alt="Google Play"
                className="h-8 w-auto"
                src={googlePlayBadge}
              />
              <img alt="App Store" className="h-8 w-auto" src={appStoreBadge} />
            </div>
          </div>

          <div className="mt-5 flex gap-5">
            {[facebook, twitter, instagram, linkedin].map((icon) => (
              <img alt={icon} className="h-7 w-auto" key={icon} src={icon} />
            ))}
          </div>
        </div>
      </Container>

      <div className="py-4 text-center text-md text-gray-500">
        &copy; Copyright Omar 2025. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
