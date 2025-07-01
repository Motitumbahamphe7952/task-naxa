import { useSelector } from "react-redux"
import translations from "./Translations"
import { Button } from "./ui/button"
import type { RootState } from "@/store"

const ExploreMap = () => {
 const lang = useSelector((state: RootState) => state.language.lang)

  return (
    <div className="flex items-center justify-between mt-10 p-20 bg-blue-500 rounded-md text-white">
        <h1>{translations[lang].exploremapHeading}</h1>
        <Button>{translations[lang].exploremapButton}</Button>
    </div>
  )
}

export default ExploreMap