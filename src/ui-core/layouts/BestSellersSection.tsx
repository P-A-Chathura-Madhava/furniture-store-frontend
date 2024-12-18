import BestSellersTabs from "../components/organisms/BestSellersTabs"

function BestSellersSection() {
  return (
    <div className="container mx-auto flex justify-center items-left flex-col px-20">
        <h3 className="text-2xl font-bold">Featured Items</h3>
        <BestSellersTabs />
    </div>
  )
}

export default BestSellersSection