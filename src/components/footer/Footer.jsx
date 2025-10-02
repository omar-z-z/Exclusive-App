import Container from "../basicComponents/Container";
import Newsletter from "./Newsletter";

const Footer = () => (
  <footer className="border-t border-gray-200 bg-white">
    <Newsletter />
    <Container className="grid grid-cols-2 gap-8 py-12 md:grid-cols-5">
      <div className="col-span-2 md:col-span-1">
        <div className="text-lg font-semibold">Exclusive</div>
        <div className="mt-3 text-sm font-medium">Support</div>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          <li>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</li>
          <li><a href="mailto:exclusive@gmail.com" className="underline">exclusive@gmail.com</a></li>
          <li><a href="tel:+88015888889999" className="underline">+88015-88888-9999</a></li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-medium">Account</div>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-medium">Quick Link</div>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="col-span-2">
        <div className="text-sm font-medium">Download App</div>
        <p className="mt-3 text-xs text-gray-600">Save $3 with App New User Only</p>
        <div className="mt-4 flex items-center gap-4">
          <img alt="App Store" className="h-12 w-auto" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
          <img alt="Google Play" className="h-12 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg" />
        </div>
      </div>
    </Container>
    <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-600">
      Copyright Rimel 2022. All right reserved
    </div>
  </footer>
);

export default Footer;