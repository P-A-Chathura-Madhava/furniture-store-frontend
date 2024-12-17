import CategoryBar from "../components/organisms/CategoryBar"
import Navbar from "../components/organisms/Navbar"
import WelcomeCarousal from "../components/organisms/WelcomeCarousal"
import BestSellersSection from "../layouts/BestSellersSection"
import ContactUsSection from "../layouts/ContactUsSection"
import DinningFurnitureSection from "../layouts/DiningFurnitureSection"
import FeaturesSection from "../layouts/FeaturesSection"
import Footer from "../layouts/Footer"
import LivingFurnitureSection from "../layouts/LivingFurnitureSection"
import PantryFurnitureSection from "../layouts/PantryFurnitureSection"
import RedifineSection from "../layouts/RedineSection"

function HomePage() {
  return (
    <div className="font-poppins">
        <Navbar />
        <CategoryBar />
        <WelcomeCarousal />
        <FeaturesSection />
        <BestSellersSection />
        <PantryFurnitureSection />
        <DinningFurnitureSection />
        <LivingFurnitureSection />
        <RedifineSection />
        <ContactUsSection />
        <Footer />
    </div>
  )
}

export default HomePage