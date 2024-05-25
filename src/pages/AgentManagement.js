import React, { useState } from 'react';
import DropDown from '../components/form/DropDown';
import { CgTrash } from 'react-icons/cg';
import DataTable from '../components/DataTable';
import ModalBox from '../components/ModalBox';

const AgentManagement = () => {
  let [isConfirm, setIsConfirm] = useState(false);
  let [isDeleted, setIsDeleted] = useState(false);

  const columns = [
    { title: 'username', key: 'userName' },
    { title: 'Email Address', key: 'emailAddress' },
    { title: 'IATA #', key: 'IATA' },
    {
      title: (
        <>
          <DropDown title='Status' />
        </>
      ),
      key: 'status',
    },
    {
      title: (
        <>
          <DropDown title='plan' />
        </>
      ),
      key: 'plan',
    },
    { title: '', key: 'action' },
  ];
  const rows = [
    {
      userName: 'Tayyab',
      emailAddress: 'tayyab@teknovation.io',
      IATA: '9767484393QR',
      status: (
        <span className='bg-theme-green rounded-full px-2.5 py-1.5'>
          Active
        </span>
      ),
      plan: (
        <span className='bg-theme-green rounded-full px-2.5 py-1.5'>
          Monthly
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
      userName: 'Tayyab',
      emailAddress: 'tayyab@teknovation.io',
      IATA: '9767484393QR',
      status: (
        <span className='bg-[#E95656] text-white rounded-full px-2.5 py-1.5'>
          Inactive
        </span>
      ),
      plan: (
        <span className='bg-[#0774A3] text-white rounded-full px-2.5 py-1.5'>
          Yearly
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
      userName: 'Haris',
      emailAddress: 'tayyab@teknovation.io',
      IATA: '9767484393QR',
      status: (
        <span className='bg-[#E95656] text-white rounded-full px-2.5 py-1.5'>
          Inactive
        </span>
      ),
      plan: (
        <span className='bg-[#A32107] text-white rounded-full px-2.5 py-1.5'>
          Promo Code
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
      userName: 'Ali',
      emailAddress: 'tayyab@teknovation.io',
      IATA: '9767484393QR',
      status: (
        <span className='bg-theme-green rounded-full px-2.5 py-1.5'>
          Active
        </span>
      ),
      plan: (
        <span className='bg-theme-green rounded-full px-2.5 py-1.5'>
          Monthly
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
  const PromoTableColumns = [
    { title: 'Title', key: 'title' },
    { title: 'Offer', key: 'offer' },

    {
      title: (
        <>
          <DropDown title='Status' />
        </>
      ),
      key: 'status',
    },

    { title: '', key: 'action' },
  ];
  const PromoTableRows = [
    {
      title: '123FRDHU50',
      offer: '1 month free',

      status: (
        <span className='bg-theme-green rounded-full px-2.5 py-1.5'>
          Active
        </span>
      ),

      action: (
        <CgTrash
          onClick={() => setIsConfirm(true)}
          className='text-2xl cursor-pointer text-[#333333] relative md:left-20'
        />
      ),
    },
    {
      title: '123FRDHU50',
      offer: '1 month free',

      status: (
        <span className='bg-[#E95656] text-white rounded-full px-2.5 py-1.5'>
          Inactive
        </span>
      ),

      action: (
        <CgTrash
          onClick={() => setIsConfirm(true)}
          className='text-2xl cursor-pointer text-[#333333] relative md:left-20'
        />
      ),
    },
  ];

  return (
    <div className='mr-[4.65rem] ml-11 my-4'>
      <div className='flex justify-between items-center mt-8 h-12 mb-10 '>
        <h1 className='font-medium text-xl'>Agent Management</h1>
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

      {/* agent deleted modal */}
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

      <div className='flex justify-between items-center mt-8 mb-10 h-12 gap-3 '>
        <h1 className='font-medium md:text-xl text-base'>Promo Codes</h1>
        <button
          type='button'
          className='md:px-6 px-3 md:py-3 py-2 bg-theme-green rounded-full md:font-bold font-medium '>
          Create New Code
        </button>
      </div>
      <DataTable columns={PromoTableColumns} rows={PromoTableRows} />
    </div>
  );
};

export default AgentManagement;
