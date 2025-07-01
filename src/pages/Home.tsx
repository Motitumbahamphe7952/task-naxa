import DataSource from "@/components/DataSource"
import ExploreMap from "@/components/ExploreMap"
import Hero from "@/components/Hero"
import Objectives from "@/components/Objectives"

const Home = () => {
  return (
    <div>
      <Hero />
      <Objectives />
      <DataSource />
      <ExploreMap />
    </div>
  )
}

export default Home