import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import ModalBox from '../components/ModalBox';
import { CgTrash } from 'react-icons/cg';
import { AiOutlineEdit } from 'react-icons/ai';
import FormField from '../components/form/FormField';
import { TbLock } from 'react-icons/tb';
import { PiEyeSlash } from 'react-icons/pi';
import { IoMdArrowDropdown } from 'react-icons/io';
import SelectOption from '../components/form/SelectField';

const AdminManagement = () => {
  let [isAdminOpen, setIsAdminOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isDeleted, setIsDeleted] = useState(false);
  let [isConfirmed, setIsConfirmed] = useState(false);
  const columns = [
    { title: 'Full Name', key: 'fullName' },
    { title: 'Email Address', key: 'emailAddress' },
    { title: 'Role', key: 'role' },
    { title: '', key: 'action' },
  ];
  const rows = [
    {
      fullName: 'Tayyab',
      emailAddress: 'tayyab@teknovation.io',
      role: 'admin',
      action: (
        <div className='flex justify-center items-center gap-16'>
          <CgTrash
            onClick={() => setIsOpen(true)}
            className='text-2xl cursor-pointer text-[#333333]'
          />
          <AiOutlineEdit className='text-2xl cursor-pointer text-[#333333]' />
        </div>
      ),
    },
    {
      fullName: 'Tayyab',
      emailAddress: 'tayyab@teknovation.io',
      role: 'admin',
      action: (
        <div className='flex justify-center items-center gap-16'>
          <CgTrash
            onClick={() => setIsOpen(true)}
            className='text-2xl cursor-pointer text-[#333333]'
          />
          <AiOutlineEdit className='text-2xl cursor-pointer text-[#333333]' />
        </div>
      ),
    },
  ];

  return (
    <div className='mr-[4.65rem] ml-11 my-4'>
      <div className='flex justify-between  items-center mt-8 mb-10 h-12 '>
        <h1 className='font-medium md:text-xl md:sm'>Admin Management</h1>
        <button
          type='button'
          className='md:px-6 md:py-3 px-3 py-2 md:text-base text-xs bg-theme-green rounded-full md:font-bold font-normal '
          onClick={() => setIsAdminOpen(true)}>
          Add New Admin
        </button>
      </div>

      {/* confirm delete modal */}
      <ModalBox isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className='flex flex-col w-[24.6875rem] h-[19.25rem] px-[4.375rem] py-6'>
          <div className='w-full justify-center flex items-center '>
            <img src='/images/QuestionIcon.svg' alt='' srcSet='' />
          </div>
          <div className='w-full justify-center flex flex-col gap-2.5 items-center py-4 '>
            <h3 className='text-[1.38rem] font-bold'>Delete Admin Account</h3>
            <p className='text-base font-light text-center'>
              Are you sure you want to delete this admin account? This step is
              irreversible.
            </p>
          </div>
          <div className='flex gap-4 pt-1 justify-center'>
            <button
              onClick={() => setIsOpen(false)}
              className='text-[#E95656] text-lg border-none outline-none tracking-[0.54px] font-medium'>
              Cancel
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsDeleted(true);
              }}
              className='flex justify-center items-center px-6 py-[1.125rem] w-[8.625rem] h-14 bg-theme-green rounded-full text-[1.13rem] tracking-[0.54px] font-medium'>
              Confirm
            </button>
          </div>
        </div>
      </ModalBox>

      {/* admin deleted modal */}
      <ModalBox isOpen={isDeleted} setIsOpen={setIsDeleted}>
        <div className='flex flex-col w-[21.125rem] h-60 py-10'>
          <div className='w-full justify-center flex flex-col gap-2.5 items-center '>
            <h3 className='text-[1.38rem] font-bold'>Account Deleted</h3>
            <p className='text-base font-light text-center'>
              The admin account is successfully deleted.
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

      {/* add new admin modal */}
      <ModalBox isOpen={isAdminOpen} setIsOpen={setIsAdminOpen}>
        <div className='w-[48.375rem] md:h-[39.5rem] py-[3.07rem] md:px-[3.45rem] px-12'>
          <h3 className='md:text-[1.38rem] text-base font-bold md:text-center text-left'>
            Add New Admin
          </h3>
          <div className='py-10 w-full flex flex-col gap-[0.63rem] '>
            <div className='flex md:flex-row flex-col w-full gap-[0.63rem]'>
              <div className='gap-4  flex flex-col md:w-[20.44rem] w-[18rem]'>
                <p className='text-left font-bold text-[0.88rem] '>Full Name</p>
                <FormField
                  type='text'
                  customClass='focus-within:border-theme-green'
                />
              </div>
              <div className='gap-4 flex flex-col md:w-[20.44rem] w-[18rem]'>
                <p className='text-left font-bold text-[0.88rem]'>Email</p>
                <FormField
                  type='email'
                  customClass='focus-within:border-theme-green'
                />
              </div>
            </div>
            <div className='flex md:flex-row flex-col gap-[0.63rem]'>
              <div className='gap-4 flex flex-col md:w-[20.44rem] w-[18rem]'>
                <p className='text-left font-bold text-[0.88rem]'>Password</p>
                <FormField
                  type='password'
                  customClass='focus-within:border-theme-green'
                  preIcon={<TbLock className='text-2xl text-[#9CA3AF]' />}
                  sufIcon={<PiEyeSlash className='text-2xl text-[#9CA3AF]' />}
                />
              </div>
              <div className='gap-4 flex flex-col md:w-[20.44rem] w-[18rem]'>
                <p className='text-left font-bold text-[0.88rem]'>
                  Confirm Password
                </p>
                <FormField
                  type='password'
                  customClass='focus-within:border-theme-green'
                  preIcon={<TbLock className='text-2xl text-[#9CA3AF]' />}
                  sufIcon={<PiEyeSlash className='text-2xl text-[#9CA3AF]' />}
                />
              </div>
            </div>

            <div className='gap-4 flex flex-col md:w-full w-72'>
              <p className='text-left font-bold text-[0.88rem]'>Role</p>
              <SelectOption />

              {/* <select
                id='role'
                defaultValue='' // Set the defaultValue to an empty string
                className=' focus-within:border-theme-green cursor-pointer flex-grow border  appearance-none border-gray-300 outline-none  flex gap-3 justify-start items-center rounded-2xl overflow-hidden p-4 bg-white'>
                <option
                  style={{ display: 'none' }}
                  value=''
                  className=' text-[#969696] text-[0.88rem] font-medium'
                  disabled>
                  Select an option
                </option>
                <option value='superAdmin'>Super Admin</option>
                <option value='administrator'>Administrator</option>
              </select>
              <div className='absolute top-96 text-xl right-0 flex cursor-pointer items-center pr-[4.75rem]'>
                <IoMdArrowDropdown />
              </div> */}
            </div>
          </div>
          <div className='flex flex-col gap-[0.63rem] pt-1 md:justify-center md:items-center justify-start items-start'>
            <button
              onClick={() => {
                setIsAdminOpen(false);
                setIsConfirmed(true);
              }}
              className='flex ml-10 justify-center items-center px-4 py-[1.125rem] text-white w-[12.13rem] h-14 bg-[#969696] rounded-full text-[1.13rem] tracking-[0.54px] font-medium'>
              Confirm
            </button>
            <button
              onClick={() => {
                setIsAdminOpen(false);
              }}
              className='text-[#E95656] ml-10 py-4 text-sm border-none outline-none w-[12.13rem] h-14 tracking-[0.54px] font-bold'>
              Cancel
            </button>
          </div>
        </div>
      </ModalBox>
      <ModalBox isOpen={isConfirmed} setIsOpen={setIsConfirmed}>
        <div className='flex flex-col w-[27rem] h-60 py-10 px-10'>
          <div className='w-full justify-center flex flex-col gap-2.5 items-center '>
            <h3 className='text-[1.38rem] font-bold'>Congratulations!</h3>
            <p className='text-base font-light text-center py-4'>
              The admin has been successfully created.
            </p>
          </div>
          <div className='w-full flex gap-4 mt-3.5 justify-center px-10'>
            <button
              onClick={() => {
                setIsConfirmed(false);
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

export default AdminManagement;
