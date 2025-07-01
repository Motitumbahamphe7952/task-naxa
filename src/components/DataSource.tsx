import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import translations from "./Translations";
import govLogo from "../assets/logo.png"; // Adjust the path as necessary

const DataSource = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  return (
    <div className="min-h-screen bg-[#dcf1fe] mt-10 rounded-md p-20 gap-4">
      <div className="flex flex-col items-center text-center mx-36">
        <h1 className="text-5xl font-semibold pb-6">
          {translations[lang].datasourcetitle}
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          {translations[lang].datasourceparagraph}
        </p>
      </div>
      <div className="text-center p-10">
        <p className="uppercase text-red-500 text-sm font-semibold">
          {translations[lang].datasourcedatadescription[0]}
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 md:mx-30">
          <div className="flex flex-row gap-2 p-4 items-center justify-center">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">नेपाल सरकार </p>
              <p className="text-sm font-semibold">अर्थ मन्त्रालय</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 p-4 items-center justify-center">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col text-left">
              <p className="text-xs font-semibold">Nepal Government</p>
              <p className="text-sm font-semibold">
                Line Ministry Budget Information System
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 p-4 items-center justify-center text-left">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">Government of Nepal</p>
              <p className="text-sm font-semibold">
                Aid Management Information System for Nepal
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 p-4 items-center justify-center text-left">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">नेपाल सरकार </p>
              <p className="text-sm font-semibold">अर्थ मन्त्रालय</p>
              <p className="text-sm font-semibold">
                महालेखा नियन्त्रक कार्यालय
              </p>
            </div>
          </div>
        </div>
        <p className="uppercase text-red-500 text-sm font-semibold mt-10">
          {translations[lang].datasourcedatadescription[1]}
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4 md:mx-30">
          <div className="flex flex-row gap-2 p-4 items-center justify-center text-left">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">कर्णाली प्रदेश सरकार</p>
              <p className="text-sm font-semibold">
                मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 p-4 items-center justify-center text-left">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">Province Government</p>
              <p className="text-sm font-semibold">
                Provincal Line Ministry Budget Information System
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 p-4 items-center justify-center text-left">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">नेपाल सरकार</p>
              <p className="text-sm font-semibold">अर्थ मन्त्रालय</p>
              <p className="text-sm font-semibold">
                महालेखा नियन्त्रक कार्यालय
              </p>
            </div>
          </div>
        </div>
        <p className="uppercase text-red-500 text-sm font-semibold mt-10">
          {translations[lang].datasourcedatadescription[2]}
        </p>
        <div className="grid grid-cols-1 gap-4 mt-4 md:mx-30">
          <div className="flex flex-row gap-2 p-4 items-center justify-center text-left">
            <img
              src={govLogo}
              alt="Government Logo"
              className="h-12 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">नेपाल सरकार</p>
              <p className="text-sm font-semibold">
                स्थानीय तहको कोष व्यवस्थापन प्रणाली
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSource;
