import type { RootState } from "@/store"
import { useSelector } from "react-redux"
import translations from "./Translations"

const DataSource = () => {
      const lang = useSelector((state: RootState) => state.language.lang)
  return (
    <div className="min-h-screen bg-[#dcf1fe] mt-10 rounded-md p-20 gap-4">
        <div className="flex flex-col items-center text-center mx-36">
            <h1 className="text-5xl font-semibold pb-6">{translations[lang].datasourcetitle}</h1>
            <p className="text-lg text-gray-700 mt-2">{translations[lang].datasourceparagraph}</p>
        </div>
        <div className="text-center p-10">
            <p className="uppercase text-red-500 text-sm font-semibold">{translations[lang].datasourcedatadescription[0]}</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 md:mx-30">
                <div className="bg-red-200 p-4">Item 1</div>
                <div className="bg-blue-200 p-4">Item 2</div>
                <div className="bg-green-200 p-4">Item 3</div>
                <div className="bg-yellow-200 p-4">Item 4</div>
            </div>
            <p className="uppercase text-red-500 text-sm font-semibold mt-10">{translations[lang].datasourcedatadescription[1]}</p>
            <div className="grid grid-cols-3 gap-4 mt-4 md:mx-30">
                <div className="bg-red-200 p-4">Item 1</div>
                <div className="bg-blue-200 p-4">Item 2</div>
                <div className="bg-green-200 p-4">Item 3</div>
            </div>
            <p className="uppercase text-red-500 text-sm font-semibold mt-10">{translations[lang].datasourcedatadescription[2]}</p>
            <div className="grid grid-cols-1 gap-4 mt-4 md:mx-30">
                <div className="bg-red-200 p-4">Item 1</div>
            </div>
        </div>
        
    </div>
  )
}

export default DataSource