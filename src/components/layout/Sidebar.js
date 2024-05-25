import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiUserLine, RiGroupLine, RiShieldUserLine } from "react-icons/ri";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      label: "Traveler Management",
      link: "/traveler-management",
      icon: <RiGroupLine />,
    },
    {
      label: "Agent Management",
      link: "/agent-management",
      icon: <RiUserLine />,
    },
    {
      label: "Admin Management",
      link: "/admin-management",
      icon: <RiShieldUserLine />,
    },
    {
      label: "Subscription Plans",
      link: "/subscription-plans",
      icon: <PiCurrencyDollarSimpleBold />,
    },
  ];
  return (
    <div
      className={`bg-theme w-64 fixed z-50 inset-y-0  ${
        isOpen ? "translate-x-0" : "md:translate-x-0 -translate-x-full "
      }transform transition-all duration-300 overflow-y-auto overflow-x-hidden scrollbar scrollbar-none`}>
      <div className=' flex justify-center items-center py-[3.75rem] pl-3.5 sticky top-0 z-50 bg-theme'>
        <img
          src='/images/adminLogo.svg'
          alt='logo'
          className='w-48 md:w-[15.25rem]'
        />
      </div>
      <div className='bg-theme mt-14 flex flex-col items-end gap-3 justify-start text-white h-full md:h-[36rem] w-full relative z-40'>
        {menuItems.map((item, index) => (
          <Link
            onClick={() => setIsOpen(false)}
            to={item.link}
            key={index}
            className={`min-w-max w-[15.25rem] hover:text-black relative flex justify-start items-center py-3 px-3.5 after:content-[""] after:h-full after:w-full after:bg-theme-green after:absolute after:z-40 after:transform after:translate-x-[13.8125rem] after:hover:-translate-x-3.5 after:rounded-tl-[5px] after:rounded-bl-[5px] after:transition-all after:duration-300 transition-all duration-500 ${
              location.pathname === item.link
                ? "bg-theme-green rounded-tl-[5px] shadow-menu-item rounded-bl-[5px] text-black after:hidden"
                : "after:block"
            }`}>
            <div className='relative flex justify-start items-center z-50 font-medium'>
              <div className='mr-3 text-xl'>{item.icon}</div>
              <div>{item.label}</div>
            </div>
          </Link>
        ))}

        <div className='hidden md:block h-[1px] w-full my-24 relative left-6 bg-white text-white' />

        <span className='cursor-pointer min-w-max w-[15.25rem] hover:text-black overflow-hidden relative flex justify-start items-center py-3 px-3.5 after:content-[""] after:h-full after:w-full after:bg-theme-green after:absolute after:z-40 after:transform after:translate-x-[13.8125rem] after:hover:-translate-x-2 after:rounded-tl-[5px] after:rounded-bl-[5px] after:transition-all after:duration-300 transition-all duration-500 '>
          <div className='relative flex justify-start items-center z-50 font-medium'>
            <div className='mr-3 text-xl'>
              <AiOutlinePoweroff />
            </div>
            <div>Log Out</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
