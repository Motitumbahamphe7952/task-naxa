import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import main from "../assets/main.jpg";
import translations from "./Translations";
const Hero = () => {
   const lang = useSelector((state: RootState) => state.language.lang)

  return (
    <div className="w-full h-[80vh] bg-gradient-to-b from-blue-500 to-[#0156b8] rounded-b-2xl">
        <div className="flex flex-row items-center justify-center h-full">
            <div className="mx-20">
                <h1 className="text-white text-6xl font-bold">{translations[lang].heroHeading}</h1>
                <p className="text-white mt-2">{translations[lang].heroSubHeading}</p>
            </div>
            <div className="flex items-center justify-center pt-10 pr-10 w-full aspect-square overflow-hidden">
            <img
                src={main}
                className="w-[80%] h-[80%] object-cover rounded-xl"
                alt="main photo"
            />
            </div>


        </div>
    </div>
  )
}

export default Hero