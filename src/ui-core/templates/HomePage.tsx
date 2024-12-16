import CategoryBar from "../components/organisms/CategoryBar"
import Navbar from "../components/organisms/Navbar"
import WelcomeCarousal from "../components/organisms/WelcomeCarousal"
import BestSellersSection from "../layouts/BestSellersSection"
import DinningFurnitureSection from "../layouts/DiningFurnitureSection"
import FeaturesSection from "../layouts/FeaturesSection"
import PantryFurnitureSection from "../layouts/PantryFurnitureSection"

function HomePage() {
  return (
    <div className="font-poppins mb-40">
        <Navbar />
        <CategoryBar />
        <WelcomeCarousal />
        <FeaturesSection />
        <BestSellersSection />
        <PantryFurnitureSection />
        <DinningFurnitureSection />
    </div>
  )
}

export default HomePage