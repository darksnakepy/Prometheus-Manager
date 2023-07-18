import Image from "next/image"

interface SideBarItemProp {
    title: string
    icon: string
    onClick: () => void
}

const SideBarItem = ({ title, icon, onClick }: SideBarItemProp) => {
    return (
      <div className="relative flex items-center hover:bg-gray-700 hover:text-white p-3 rounded-lg cursor-pointer mt-2" onClick={onClick}>
        <Image width={20} height={20} src={icon} alt={title} className="mr-2" />
        <span className="relative z-10">{title}</span>
      </div>
    );
  };

export default SideBarItem