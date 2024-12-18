import CategoryBar from "../components/organisms/CategoryBar"
import Navbar from "../components/organisms/Navbar"
import WelcomeCarousal from "../components/organisms/WelcomeCarousal"
import BestSellersSection from "../layouts/BestSellersSection"
import ContactUsSection from "../layouts/ContactUsSection"
import FeaturesSection from "../layouts/FeaturesSection"
import Footer from "../layouts/Footer"
import FurnitureSection from "../layouts/FurnitureSection"
import RedifineSection from "../layouts/RedineSection"

// Pantry Item Images
import pimg01 from "/public/pantry/img-09.jpg";
import pimg02 from "/public/pantry/img-10.jpg";
import pimg03 from "/public/pantry/img-11.jpg";
import pimg04 from "/public/pantry/img-12.jpg";
import pimg05 from "/public/pantryItems/pantryImage-01.jpg";
import pimg06 from "/public/pantryItems/pantryImage-02.jpg";

// Dinning Items Images
import dimg01 from "/public/dinningItems/dinningImage-01.jpg";
import dimg02 from "/public/dinningItems/dinningImage-02.jpg";
import dimg03 from "/public/dinningItems/dinningImage-03.jpeg";
import dimg04 from "/public/dinningItems/dinningImage-04.jpg";
import dimg05 from "/public/dinningItems/dinningImage-05.jpg";
import dimg06 from "/public/dinningItems/dinningImage-06.jpg";

// Living Room Items Images
import limg01 from "/public/livingRoomItems/livingImage-01.png";
import limg02 from "/public/livingRoomItems/livingImage-02.jpg";
import limg03 from "/public/livingRoomItems/livingImage-03.jpg";
import limg04 from "/public/livingRoomItems/livingImage-04.jpg";
import limg05 from "/public/livingRoomItems/livingImage-05.jpg";
import limg06 from "/public/livingRoomItems/livingImage-06.jpg";

// Decor Images
import deimg01 from "/public/decorItems/decorImage-01.jpg";
import deimg02 from "/public/decorItems/decorImage-02.jpg";
import deimg03 from "/public/decorItems/decorImage-03.jpg";
import deimg04 from "/public/decorItems/decorImage-04.jpg";
import deimg05 from "/public/decorItems/decorImage-05.jpg";
import deimg06 from "/public/decorItems/decorImage-06.jpg";

// Pantry Items
const pantryItems = [
  {
    image: pimg01,
    title: "Panry Set nova",
    inStock: true
  },
  {
    image: pimg02,
    title: "Panry Set rulf",
    inStock: true
  },
  {
    image: pimg03,
    title: "Panry Set attract",
    inStock: true
  },
  {
    image: pimg04,
    title: "Panry Set lion",
    inStock: true
  },
  {
    image: pimg05,
    title: "Panry Set nash",
    inStock: true
  },
  {
    image: pimg06,
    title: "Panry Set seko",
    inStock: true
  }
]

// Dinning Items
const dinningItems = [
  {
    image: dimg01,
    title: "Light TV Stand",
    inStock: true
  },
  {
    image: dimg02,
    title: "Rudov TV Stand",
    inStock: true
  },
  {
    image: dimg03,
    title: "Royal Dinning Table",
    inStock: true
  },
  {
    image: dimg04,
    title: "Darkove Wooden Sofa",
    inStock: true
  },
  {
    image: dimg05,
    title: "Royal Wooden Sofa",
    inStock: true
  },
  {
    image: dimg06,
    title: "Simplow Wooden Sofa",
    inStock: true
  }
]

// Living Room Items
const livingRoomItems = [
  {
    image: limg01,
    title: "Royal Teapoy",
    inStock: true
  },
  {
    image: limg02,
    title: "Newov Teapoy",
    inStock: true
  },
  {
    image: limg03,
    title: "Neon Teapoy",
    inStock: true
  },
  {
    image: limg04,
    title: "Benchov Living Table",
    inStock: true
  },
  {
    image: limg05,
    title: "Neon Living Set",
    inStock: true
  },
  {
    image: limg06,
    title: "Royal Living Set",
    inStock: true
  }
]

// Decor Items
const decorItems = [
  {
    image: deimg01,
    title: "Simplov Lamp Hanger",
    inStock: true
  },
  {
    image: deimg02,
    title: "Royal Statue Stand",
    inStock: true
  },
  {
    image: deimg03,
    title: "Simplov Statue Stand",
    inStock: true
  },
  {
    image: deimg04,
    title: "Neon Plant Pot",
    inStock: true
  },
  {
    image: deimg05,
    title: "Royal Plant Pot",
    inStock: true
  },
  {
    image: deimg06,
    title: "Royal Lamp Hanger",
    inStock: true
  }
]

const furnitureSections = [
  {
    title1:"Pantry",
    title2:"Furniture",
    description: "Our kitchen and pantry furniture solutions are in a league of its own. We craft the most exceptional pieces that are of the highest quality, functionality, durability, and aesthetic.",
    items: pantryItems
  },
  {
    title1:"Dining Room",
    title2:"Furniture",
    description: "The dining room is the heart of your home, and we’ve got all the elements to create your ideal dining space. Discover our stylish, durable dining collections designed to elevate every meal.",
    items: dinningItems
  },
  {
    title1:"Living",
    title2:"Room Furniture",
    description: "Styling your living room allows you the chance to create an inviting space reflecting your signature style. We have a range of living room furniture to suit your style, whether its classic, contemporary or eclectic.",
    items: livingRoomItems
  },
  {
    title1:"Decor",
    title2:"Items",
    description: "Our kitchen and pantry furniture solutions are in a league of its own. We craft the most exceptional pieces that are of the highest quality, functionality, durability, and aesthetic.",
    items: decorItems
  }
]

function HomePage() {
  return (
    <div className="font-poppins">
        <Navbar />
        <CategoryBar />
        <WelcomeCarousal />
        <FeaturesSection />
        <BestSellersSection />
        {
          furnitureSections?.map((item: any, index: number) => {
            return(
              <FurnitureSection {...{sectionTitle1: item.title1, sectionTitle2: item.title2, description: item.description, items: item.items}} />
            )
          })
        }
        <RedifineSection />
        <ContactUsSection />
        <Footer />
    </div>
  )
}

export default HomePage