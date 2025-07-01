import { useSelector } from "react-redux";
import translations from "./Translations";
import { Button } from "./ui/button";
import { IoMdMap } from "react-icons/io";
import type { RootState } from "@/store";
import location from "../assets/locationicons.png"; // Adjust the path as necessary

const ExploreMap = () => {
  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <div className=" text-4xl font-light mt-10 p-20 bg-blue-500 rounded-md">
    <div className="flex items-center justify-between  text-white mx-10" > 
       <div className="flex flex-row items-center gap-6">
        <img src={location} alt="Map" className="w-40 h-40" />
        <h1 className="max-w-[70%]">{translations[lang].exploremapHeading}</h1>
      </div>

      <Button size="lg" className="bg-white text-blue-500 w-50 h-12 text-sm">
        <IoMdMap/> {translations[lang].exploremapButton}
      </Button> 
    </div>    
    </div>
  );
};

export default ExploreMap;
