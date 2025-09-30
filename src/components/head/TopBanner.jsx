


import { useState } from "react";
import Container from "../basicComponents/Container";

const TopBanner = () => {
  const [lang, setLang] = useState("en");

  return (
    <div className="w-full bg-black text-white text-sm">
      <Container className="flex items-center py-2 text-sm">
        <div className="mx-auto flex items-center gap-2">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a className="font-semibold underline" href="#">
            ShopNow
          </a>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-black text-white text-sm focus:outline-none"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
