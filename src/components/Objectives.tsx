// // import Objective from "../assets/objective.png";
// // const Objectives = () => {
// //   return (
// //     <div className="max-h-screen flex items-center justify-center bg-[#fff3f2] rounded-md mt-10">
// //         <div className="flex flex-row item-center justify-centermx-auto p-6 ">
// //             <div className="p-4">
// //                 <h1 className="text-4xl pb-4">This portal is developed to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.</h1>
// //                 <p>In the last few years, there has been a huge concern among the civil societies, government and international development partners about improving the quality of the life of people in Karnali. Nepal government along with the support of donor countries and multilateral funding agencies has invested huge resources to the implementing development project through NGO/INGO and others. Many organizations including NGO/INGOs have spent a significant amount of resources towards assessing development initiatives through project intervention at provincial and municipal level. The focus of all these investments and efforts is to create the equitable prosperous society but such investment is not always based on the proper assessment of the local needs and expectations.</p>
// //             </div>
// //             <div className="flex items-center justify-center pt-10 pr-10 w-full aspect-square overflow-hidden">
// //                 <img src={Objective} alt="objective image" className="w-[80vw] h-full rounded-md" />
// //             </div>

// //         </div>
// //     </div>
// //   )
// // }

// // export default Objectives

// import React from 'react'
// import translations from "./Translations";
// import Objective from '../assets/objective.png'

// import { useSelector } from 'react-redux'
// import type { RootState } from '@/store'

// const Objectives: React.FC = () => {
//     const lang = useSelector((state: RootState) => state.language.lang)
//   return (
//     <section className="bg-[#fff3f2] rounded-2xl p-8 mt-10">
//       <div className="mx-20 flex flex-col md:flex-row items-center gap-8  pt-10">
//         {/* Text block */}
//         <div className="md:w-2/3">
//           <h2 className="text-3xl md:text-4xl leading-tight mb-4">
//             {translations[lang].objectivesHeading}
//           </h2>
//           <p className="text-gray-700 text-base leading-relaxed">
//             {translations[lang].objectivesSubHeading}
//           </p>
//         </div>

//         {/* Image block */}
//         <div className="md:w-1/3 overflow-hidden rounded-md">
//           <img
//             src={Objective}
//             alt="Objectives illustration"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//         <div className="pt-8 mx-20">
//         <p className="text-xl font-semibold py-5 ">Objectives</p>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-5">
//             {translations[lang].steps.map(({ icon, label }, idx) => (
//           <div key={idx} className="flex flex-col space-y-4">
//             <img src={icon} alt="" className="w-16 h-16 object-contain" />
//             <p className="text-gray-800 leading-snug">{label}</p>
//           </div>
//             ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Objectives

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
        <div className="md:w-1/3 overflow-hidden rounded-md">
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
