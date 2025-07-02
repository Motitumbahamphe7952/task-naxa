
import { useSelector } from "react-redux";
import translations from "./Translations";
import { Button } from "./ui/button";
import { IoMdMap } from "react-icons/io";
import type { RootState } from "@/store";
import location from "../assets/locationicons.png";

const ExploreMap = () => {
  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <div className="text-2xl sm:text-3xl md:text-4xl font-light mt-6 sm:mt-8 md:mt-10 p-6 sm:p-10 md:p-20 bg-blue-500 rounded-md">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-white mx-4 sm:mx-6 md:mx-10">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <img 
            src={location} 
            alt="Map" 
            className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40" 
          />
          <h1 className="text-center sm:text-left max-w-full sm:max-w-[70%] text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {translations[lang].exploremapHeading}
          </h1>
        </div>

        <Button 
          size="lg" 
          className="bg-white text-blue-500 w-full sm:w-auto mt-4 sm:mt-0 h-10 sm:h-12 text-xs sm:text-sm"
        >
          <IoMdMap className="mr-2"/> 
          {translations[lang].exploremapButton}
        </Button>
      </div>
    </div>
  );
};

export default ExploreMap;