import React, { useState } from "react";
import DataTable from "../components/DataTable";
import { CgTrash } from "react-icons/cg";
import DropDown from "../components/form/DropDown";
import ModalBox from "../components/ModalBox";

const TravelerManagement = () => {
  let [isConfirm, setIsConfirm] = useState(false);
  let [isDeleted, setIsDeleted] = useState(false);

  const columns = [
    { title: "username", key: "userName" },
    { title: "Email Address", key: "emailAddress" },
    {
      title: (
        <>
          <DropDown title='Status' />
        </>
      ),
      key: "status",
    },
    { title: "", key: "action" },
  ];
  const rows = [
    {
      userName: "Tayyab",
      emailAddress: "tayyab@teknovation.io",
      status: (
        <span className='bg-theme-green rounded-full px-2.5 py-1.5'>
          Active
        </span>
      ),
      action: (
        <CgTrash
          onClick={() => setIsConfirm(true)}
          className='text-2xl cursor-pointer text-[#333333]'
        />
      ),
    },
    {
      userName: "Tayyab",
      emailAddress: "tayyab@teknovation.io",
      status: (
        <span className='bg-[#E95656] text-white rounded-full px-2.5 py-1.5'>
          Inactive
        </span>
      ),
      action: (
        <CgTrash
          onClick={() => setIsConfirm(true)}
          className='text-2xl cursor-pointer text-[#333333]'
        />
      ),
    },
    {
      userName: "Haris",
      emailAddress: "tayyab@teknovation.io",
      status: (
        <span className='bg-[#E95656] text-white rounded-full px-2.5 py-1.5'>
          Inactive
        </span>
      ),
      action: (
        <CgTrash
          onClick={() => setIsConfirm(true)}
          className='text-2xl cursor-pointer text-[#333333]'
        />
      ),
    },
    {
      userName: "Ali",
      emailAddress: "tayyab@teknovation.io",
      status: (
        <span className='bg-theme-green rounded-full px-2.5 py-1.5'>
          Active
        </span>
      ),
      action: (
        <CgTrash
          onClick={() => setIsConfirm(true)}
          className='text-2xl cursor-pointer text-[#333333]'
        />
      ),
    },
  ];

  return (
    <div className='mr-[4.65rem] ml-11 my-4'>
      <div className='flex justify-between items-center mt-8 mb-10 h-12 '>
        <h1 className='font-medium text-xl'>Traveler Management</h1>
      </div>

      {/* confirm delete modal */}
      <ModalBox isOpen={isConfirm} setIsOpen={setIsConfirm}>
        <div className='flex flex-col w-[24.6875rem] h-[19.25rem] px-[4.375rem] py-6'>
          <div className='w-full justify-center flex items-center '>
            <img src='/images/QuestionIcon.svg' alt='' srcSet='' />
          </div>
          <div className='w-full justify-center flex flex-col gap-2.5 items-center py-4 '>
            <h3 className='text-[1.38rem] font-bold'>Delete User Account</h3>
            <p className='text-base font-light text-center'>
              Are you sure you want to delete “username” account? This step is
              irreversible.
            </p>
          </div>
          <div className='flex gap-4 pt-1 justify-center'>
            <button
              onClick={() => setIsConfirm(false)}
              className='text-[#E95656] text-lg border-none outline-none tracking-[0.54px] font-medium'>
              Cancel
            </button>
            <button
              onClick={() => {
                setIsConfirm(false);
                setIsDeleted(true);
              }}
              className='flex justify-center items-center px-6 py-[1.125rem] w-[8.625rem] h-14 bg-theme-green rounded-full text-[1.13rem] tracking-[0.54px] font-medium'>
              Confirm
            </button>
          </div>
        </div>
      </ModalBox>

      {/* traveler deleted modal */}
      <ModalBox isOpen={isDeleted} setIsOpen={setIsDeleted}>
        <div className='flex flex-col w-[21.125rem] h-60 py-10'>
          <div className='w-full justify-center flex flex-col gap-2.5 items-center '>
            <h3 className='text-[1.38rem] font-bold'>Account Deleted</h3>
            <p className='text-base font-light text-center'>
              The user account was successfully deleted.
            </p>
          </div>
          <div className='w-full flex gap-4 mt-3.5 justify-center px-10'>
            <button
              onClick={() => {
                setIsDeleted(false);
              }}
              className='flex justify-center items-center px-6 py-[1.13rem] w-full h-14 bg-theme-green rounded-full text-[1.13rem] tracking-[0.54px] font-medium'>
              Ok
            </button>
          </div>
        </div>
      </ModalBox>

      <DataTable columns={columns} rows={rows} />
    </div>
  );
};

export default TravelerManagement;
