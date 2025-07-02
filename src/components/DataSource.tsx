

import type { RootState } from "@/store"
import { useSelector } from "react-redux"
import translations from "./Translations"
import govLogo from "../assets/logo.png"

const DataSource = () => {
  const lang = useSelector((state: RootState) => state.language.lang)

  return (
    <div className="min-h-screen bg-[#dcf1fe] mt-10 pt-10 rounded-b-2xl px-4 sm:px-6 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold pb-4">
          {translations[lang].datasourcetitle}
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          {translations[lang].datasourceparagraph}
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        <section>
          <p className="uppercase text-center text-red-500 text-sm font-semibold mb-4">
            {translations[lang].datasourcedatadescription[0]}
          </p>
          <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2">
            {[ 
              { lines: ["नेपाल सरकार", "अर्थ मन्त्रालय"] },
              { lines: ["Nepal Government", "Line Ministry Budget Information System"] },
              { lines: ["Government of Nepal", "Aid Management Information System for Nepal"] },
              { lines: ["नेपाल सरकार", "अर्थ मन्त्रालय", "महालेखा नियन्त्रक कार्यालय"] },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-1 p-4"
              >
                <img src={govLogo} alt="Government Logo" className="h-12 w-auto" />
                <div className="flex flex-col space-y-1">
                  {item.lines.map((text, i) => (
                    <p key={i} className={`${i === 0 ? "text-xs" : "text-sm"} font-semibold`}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="uppercase text-red-500 text-sm  text-center font-semibold mb-4">
            {translations[lang].datasourcedatadescription[1]}
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {[
              { lines: ["कर्णाली प्रदेश सरकार", "मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय"] },
              { lines: ["Province Government", "Provincal Line Ministry Budget Information System"] },
              { lines: ["नेपाल सरकार", "अर्थ मन्त्रालय", "महालेखा नियन्त्रक कार्यालय"] },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-1 p-2"
              >
                <img src={govLogo} alt="Government Logo" className="h-12 w-auto" />
                <div className="flex flex-col space-y-1">
                  {item.lines.map((text, i) => (
                    <p key={i} className={`${i === 0 ? "text-xs" : "text-sm"} font-semibold`}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="uppercase text-red-500 text-sm text-center font-semibold mb-4">
            {translations[lang].datasourcedatadescription[2]}
          </p>
          <div className="flex gap-4 pb-10 items-center justify-center">
            <div className="flex items-center gap-1 p-2">
              <img src={govLogo} alt="Government Logo" className="h-12 w-auto" />
              <div className="flex flex-col space-y-1">
                <p className="text-xs font-semibold">नेपाल सरकार</p>
                <p className="text-sm font-semibold">स्थानीय तहको कोष व्यवस्थापन प्रणाली</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DataSource