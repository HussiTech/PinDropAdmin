import React from "react";
import FormField from "../form/FormField";
import { GrMenu } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <div className='flex justify-between items-center gap-8 w-full h-[5.88rem] pt-6 pr-6 pb-[1.44rem] pl-[2.07rem] bg-white border-b border-solid border-gray-300'>
      <div className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <GrMenu className='text-2xl  ' />
      </div>
      <FormField
        placeholder='Search'
        customClass='w-[20.4375rem] h-[2.94rem]'
        preIcon={<LuSearch className='text-2xl text-[#9CA3AF]' />}
      />
      <div className='flex items-center gap-10 md:pr-10 '>
        <div className='hidden lg:block'>
          <p className='text-[1rem] font-bold'>Username </p>
          <p className='text-[0.88rem] font-normal'>Administrator</p>
        </div>
        <IoSettingsOutline className='text-4xl' />
      </div>
    </div>
  );
};

export default Header;
