import { useSelector } from "react-redux";
import type { RootState } from "../store";
import main from "../assets/main.jpg";
import translations from "./Translations";

const Hero = () => {
  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <div className="w-full h-auto min-h-[60vh] md:h-[80vh] bg-gradient-to-b from-blue-500 to-[#0156b8] rounded-b-2xl">
      <div className="flex flex-col customxl:flex-row items-center justify-center h-full p-4 md:p-0">
        <div className="md:mx-20 mx-4 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold">
            {translations[lang].heroHeading}
          </h1>
          <p className="text-white mt-2 text-xs sm:text-lg md:text-base">
            {translations[lang].heroSubHeading}
          </p>
        </div>
        <div className="flex items-center justify-center pt-10 md:pr-10 w-full aspect-square overflow-hidden">
          <img
            src={main}
            className="w-[90%] md:w-[80%] h-[90%] md:h-[80%] object-cover rounded-xl"
            alt="main photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
