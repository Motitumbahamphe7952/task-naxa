
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoEn from "../assets/logo1.png";
import logoNp from "../assets/logo2.png";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import translations from "./Translations";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { setLang } from "@/store/langslice";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isNepali, setIsNepali] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lang = isNepali ? "np" : "en";

  const handleToggle = (checked: boolean) => {
    setIsNepali(checked);
    dispatch(setLang(checked ? "np" : "en"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 w-full ${scrolled ? "bg-white shadow-md" : "bg-transparent"} transition-all duration-300 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={isNepali ? logoNp : logoEn}
              alt="logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/data" 
              className={`hover:text-blue-600 transition ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {translations[lang].data}
            </NavLink>
            <NavLink 
              to="/about" 
              className={`hover:text-blue-600 transition ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {translations[lang].about}
            </NavLink>

            <div className="flex items-center space-x-2">
              <span className={`text-sm ${scrolled ? 'text-gray-600' : 'text-white'}`}>EN</span>
              <Switch
                checked={isNepali}
                onCheckedChange={handleToggle}
                className="data-[state=checked]:bg-gray-300 bg-gray-300 border"
              />
              <span className={`text-sm ${scrolled ? 'text-gray-600' : 'text-white'}`}>NP</span>
            </div>

            <Button 
              className={`${scrolled ? 'bg-blue-600' : 'bg-white text-blue-600'} hover:bg-blue-700 transition`} 
              size={"sm"}
            >
              <NavLink to="/login">{translations[lang].login}</NavLink>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-blue-600'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-blue-600'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${scrolled ? 'bg-white' : 'bg-blue-800'} transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/data"
            className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-blue-700'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {translations[lang].data}
          </NavLink>
          <NavLink
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-blue-700'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {translations[lang].about}
          </NavLink>
          
          <div className="flex items-center justify-between px-3 py-2">
            <span className={`text-sm ${scrolled ? 'text-gray-600' : 'text-white'}`}>EN</span>
            <Switch
              checked={isNepali}
              onCheckedChange={handleToggle}
              className="data-[state=checked]:bg-gray-300 bg-gray-300 border mx-2"
            />
            <span className={`text-sm ${scrolled ? 'text-gray-600' : 'text-white'}`}>NP</span>
          </div>

          <Button 
            className={`w-full mt-2 ${scrolled ? 'bg-blue-600' : 'bg-white text-blue-600'} hover:bg-blue-700`}
            size={"sm"}
          >
            <NavLink to="/login" className="w-full block" onClick={() => setMobileMenuOpen(false)}>
              {translations[lang].login}
            </NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;