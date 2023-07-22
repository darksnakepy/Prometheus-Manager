import Image from "next/image"

interface SideBarItemProp {
    title: string
    icon: string
    onClick: () => void
    isActive?: boolean
}

const SideBarItem = ({ title, icon, onClick, isActive }: SideBarItemProp) => {
    return (
      <div className={`relative flex items-center p-3 rounded-lg cursor-pointer mt-2 mr-2 ${isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-800 hover:text-white'}`} onClick={onClick}>
        <Image width={20} height={20} src={icon} alt={title} className="mr-2" />
        <span className="relative">{title}</span>
      </div>
    );
};

export default SideBarItem