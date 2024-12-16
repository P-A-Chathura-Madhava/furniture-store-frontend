import { IoPersonOutline } from "react-icons/io5";

function AccountButton() {
  return (
    <div className="flex flex-col items-center border-2 border-black h-full px-2 border-y-transparent border-l-transparent hover:bg-[#fcde94] cursor-pointer transition-all duration-300 w-[100px] justify-center">
        <IoPersonOutline className="text-2xl" />
        <h4>Account</h4>
    </div>
  )
}

export default AccountButton