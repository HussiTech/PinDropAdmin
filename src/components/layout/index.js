import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex justify-start items-start bg-theme'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen ? (
        <div
          className='block md:hidden fixed inset-0 backdrop-blur-sm bg-black/40 z-10 transition-all duration-300'
          onClick={() => setIsOpen(false)}
        />
      ) : null}

      <div
        className={`min-h-screen overflow-hidden md:rounded-tl-[2.5rem] md:rounded-bl-[2.5rem] w-full bg-[#F9FAFB] md:ml-64 `}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
