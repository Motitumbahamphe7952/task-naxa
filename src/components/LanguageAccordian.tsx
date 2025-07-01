
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion";
import ukFlag from "../assets/engflag.png";
import npFlag from "../assets/nepalflag.png";
import type { RootState } from "@/store";
import { setLang } from "@/store/langslice";

const LanguageAccordion: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (value: "en" | "np") => {
    if (value !== lang) {
      dispatch(setLang(value));
    }
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Small delay to allow moving to dropdown
  };

  return (
    <div className="relative">
      <div 
        className="inline-block" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Accordion 
          type="single" 
          collapsible 
          className="w-auto"
          value={isOpen ? "lang-selector" : ""}
        >
          <AccordionItem value="lang-selector" className="border-0">
            <AccordionTrigger className="flex items-center hover:no-underline p-0">
              <img
                src={lang === "en" ? ukFlag : npFlag}
                alt={lang === "en" ? "English" : "Nepali"}
                className="w-5 h-5 object-contain"
              />
              <span className="font-medium ml-2">
                {lang === "en" ? "English" : "नेपाली"}
              </span>
            </AccordionTrigger>
            <AccordionContent />
          </AccordionItem>
        </Accordion>
      </div>

      {isOpen && (
        <div 
          className="absolute bottom-full mb-2 left-0 w-full min-w-[120px] bg-white border border-gray-200 rounded-md shadow-lg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => handleSelect("en")}
            className={`flex items-center w-full space-x-2 px-3 py-2 hover:bg-gray-100 ${
              lang === "en" ? "bg-gray-100" : ""
            }`}
          >
            <img src={ukFlag} alt="English" className="w-5 h-5 object-contain" />
            <span>English</span>
          </button>
          <button
            onClick={() => handleSelect("np")}
            className={`flex items-center w-full space-x-2 px-3 py-2 hover:bg-gray-100 ${
              lang === "np" ? "bg-gray-100" : ""
            }`}
          >
            <img src={npFlag} alt="नेपाली" className="w-5 h-5 object-contain" />
            <span>नेपाली</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageAccordion;