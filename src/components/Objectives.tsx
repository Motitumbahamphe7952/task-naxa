
import React from "react";
import translations from "./Translations";
import Objective from "../assets/objective.png";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const Objectives: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <section className="bg-[#fff3f2] rounded-2xl p-4 sm:p-6 lg:p-8 mt-6 sm:mt-8 lg:mt-10">
      {/* Main content row */}
      <div className="mx-4 sm:mx-8 lg:mx-20 flex flex-col customxl:flex-row items-center gap-6 lg:gap-8 pt-6 lg:pt-10">
        {/* Text block - takes full width on mobile, 2/3 on desktop */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 lg:mb-4">
            {translations[lang].objectivesHeading}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {translations[lang].objectivesSubHeading}
          </p>
        </div>

        {/* Image block - hidden on smallest mobile, full width on tablet, 1/3 on desktop */}
        <div className="md:w-3 overflow-hidden rounded-md">
          <img
            src={Objective}
            alt="Objectives illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Objectives grid section */}
      <div className="pt-6 sm:pt-8 mx-4 sm:mx-8 lg:mx-20">
        <p className="text-lg sm:text-xl font-semibold py-3 sm:py-5">
          Objectives
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-4 sm:pb-5">
          {translations[lang].steps.map(({ icon, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-2 sm:space-y-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm"
            >
              <img
                src={icon}
                alt=""
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <p className="text-gray-800 text-sm sm:text-base leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
