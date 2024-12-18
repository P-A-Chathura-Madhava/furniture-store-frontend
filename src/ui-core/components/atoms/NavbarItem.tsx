function NavbarItem({...props}) {
    const {icon, title} = props;
    
  return (
        <div className="flex flex-col items-center border-2 border-black h-full px-2 border-y-transparent border-l-transparent hover:bg-[#fcde94] cursor-pointer transition-all duration-300 w-[100px] justify-center">
            <div className="text-2xl">
            {icon}
            </div>
            <h4>{title}</h4>
        </div>
  )
}

export default NavbarItem