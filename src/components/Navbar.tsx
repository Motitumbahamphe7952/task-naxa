import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoEn from "../assets/logo1.png";
import logoNp from "../assets/logo2.png";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import translations from "./Translations";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { setLang } from "@/store/langslice";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isNepali, setIsNepali] = useState(false);

  const lang = isNepali ? "np" : "en";
   const handleToggle = (checked: boolean) => {
    setIsNepali(checked)
    dispatch(setLang(checked ? "np" : "en"))
  }
  return (
    <nav className="fixed inset-x-0 w-[90%] h-auto pt-4 px-6 flex justify-between items-center z-10 text-white text-lg mx-auto">
      <div className="flex items-center w-full h-auto">
        <img
          src={isNepali ? logoNp : logoEn}
          alt="logo"
          className="h-[80px] w-auto object-fit"
        />
      </div>
      <div className="flex items-center space-x-6">
        <NavLink to="/data" className="hover:text-blue-950 transition">
          {translations[lang].data}
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-950 transition">
          {translations[lang].about}
        </NavLink>

        <Switch
          checked={isNepali}
          onCheckedChange={handleToggle}
          className="data-[state=checked]:bg-gray-300 bg-gray-300 border transition"
        >
          <span className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 translate-x-1 data-[state=checked]:translate-x-6" />
        </Switch>
        

        <Button className="bg-blue-500 text-white hover:bg-blue-700 transition border-1 border-white" size={"lg"}>
          <NavLink to="/login">{translations[lang].login}</NavLink>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
