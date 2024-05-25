import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import { AiOutlineEdit } from 'react-icons/ai';
import { CgTrash } from 'react-icons/cg';
import ModalBox from '../components/ModalBox';
import FormField from '../components/form/FormField';

const SubscriptionPlans = () => {
  let [isConfirm, setIsConfirm] = useState(false);
  let [isDeleted, setIsDeleted] = useState(false);
  let [isAdminOpen, setIsAdminOpen] = useState(false);
  let [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsAdminOpen(true);
    setIsEditMode(true);
  };

  const handleAddNewPlanClick = () => {
    setIsAdminOpen(true);
    setIsEditMode(false);
  };

  const columns = [
    { title: 'user name', key: 'userName' },
    { title: 'plan name', key: 'planName' },
    { title: 'plan amount', key: 'planAmount' },
    { title: '', key: 'edit' },
    { title: '', key: 'action' },
  ];
  const rows = [
    {
      userName: 'Raza',
      planName: 'Basic',
      planAmount: '$ 89/month',
      edit: (
        <div className='flex justify-center items-center'>
          <span
            onClick={handleEditClick}
            className='bg-theme-green cursor-pointer rounded-full max-w-[5.4rem] gap-2 flex justify-center items-center px-2.5 py-1.5'>
            Edit <img src='/images/editIcon.svg' alt='' />
          </span>
        </div>
      ),
      action: (
        <div className='flex justify-center items-center'>
          <span
            onClick={() => setIsConfirm(true)}
            className='cursor-pointer bg-[#E95656] text-white rounded-full max-w-[5.4rem] gap-2 flex justify-center items-center px-2.5 py-1.5'>
            Delete <CgTrash className='text-lg text-white' />
          </span>
        </div>
      ),
    },
    {
      userName: 'Ahmad',
      planName: 'Standard',
      planAmount: '120/month',
      edit: (
        <div className='flex justify-center items-center'>
          <span
            onClick={handleEditClick}
            className='bg-theme-green cursor-pointer rounded-full max-w-[5.4rem] gap-2 flex justify-center items-center px-2.5 py-1.5'>
            Edit <img src='/images/editIcon.svg' alt='' />
          </span>
        </div>
      ),
      action: (
        <div className='flex justify-center items-center'>
          <span
            onClick={() => setIsConfirm(true)}
            className='cursor-pointer bg-[#E95656] text-white rounded-full max-w-[5.4rem] gap-2 flex justify-center items-center px-2.5 py-1.5'>
            Delete <CgTrash className='text-lg text-white' />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className='mr-[4.65rem] ml-11 my-4'>
      <div className='flex justify-between items-center mt-8 h-12 mb-10'>
        <h1 className='font-medium md:text-xl text-sm'>
          Subscription Plan Management
        </h1>
        <button
          type='button'
          className='md:px-6 md:py-3 px-3 py-1 bg-theme-green rounded-full md:text-base text-xs md:font-bold font-medium'
          onClick={handleAddNewPlanClick}>
          Add New Plan
        </button>
      </div>

      {/* confirm delete modal */}
      <ModalBox isOpen={isConfirm} setIsOpen={setIsConfirm}>
        <div className='flex flex-col w-[24.6875rem] h-[19.25rem] px-[4.375rem] py-6'>
          <div className='w-full justify-center flex items-center '>
            <img src='/images/QuestionIcon.svg' alt='' srcSet='' />
          </div>
          <div className='w-full justify-center flex flex-col gap-2.5 items-center py-4 '>
            <h3 className='text-[1.38rem] font-bold'>Delete Plan</h3>
            <p className='text-base font-light text-center'>
              Are you sure you want to delete this plan? This step is
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
            <h3 className='text-[1.38rem] font-bold'>Plan Deleted</h3>
            <p className='text-base font-light text-center'>
              The plan is successfully deleted.
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

      <ModalBox isOpen={isAdminOpen} setIsOpen={setIsAdminOpen}>
        <div className='w-[48.375rem] md:h-[36rem] py-[1.88rem] px-[3.45rem]'>
          <h3 className='text-[0.63rem] font-light text-left text-[#4F4F4F] text-transform: uppercase'>
            Plan details
          </h3>
          <div className='py-[1.88rem] md:w-full w-72 flex flex-col gap-[0.63rem] '>
            <div className='gap-4 flex flex-col w-full'>
              <p className='text-left font-bold text-[0.88rem]'>Title</p>
              <FormField type='text' />
            </div>
            <div className='gap-4 flex flex-col w-full'>
              <p className='text-left font-bold text-[0.88rem]'>Description</p>
              <textarea
                id='myTextarea'
                name='myTextarea'
                rows='4'
                cols='5'
                className='outline-none border border-gray-300 flex gap-3 justify-start items-center rounded-2xl overflow-hidden resize-none  p-4 bg-white '
              />
            </div>
            <div className='gap-4 flex md:flex-row flex-col w-full'>
              <div className='w-full'>
                <span className='flex md:gap-[10.5rem] gap-36  items-center'>
                  <p className='text-left font-bold md:text-[0.88rem] text-xs py-3 '>
                    Price per month
                  </p>
                  <label class='relative inline-flex justify-center items-center cursor-pointer'>
                    <input type='checkbox' value='' class='sr-only peer' />
                    <div class="w-8 h-4 bg-gray-500 peer-focus:outline-none  peer-focus:ring-0 dark:peer-focus:ring-0 rounded-full peer dark:bg-gray-700 outline-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.5px] after:start-[2px]  after:bg-[#A6F756] after:border-gray-300 after:border after:rounded-full after:h-[0.92rem] after:w-[0.92rem] after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                  </label>
                </span>
                <FormField />
              </div>
              <div className='w-full'>
                <span className='flex md:gap-[11.5rem] gap-[9.85rem]  items-center'>
                  <p className='text-left font-bold md:text-[0.88rem] text-xs py-3 '>
                    Price per year
                  </p>
                  <label class='relative inline-flex justify-center items-center cursor-pointer'>
                    <input type='checkbox' value='' class='sr-only peer' />
                    <div class="w-8 h-4 bg-gray-500 peer-focus:outline-none  peer-focus:ring-0 dark:peer-focus:ring-0 rounded-full peer dark:bg-gray-700 outline-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.5px] after:start-[2px]  after:bg-[#A6F756] after:border-gray-300 after:border after:rounded-full after:h-[0.92rem] after:w-[0.92rem] after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                  </label>
                </span>
                <FormField />
              </div>
            </div>
          </div>

          {/* <button className='flex justify-center items-center px-6 py-3 text-black w-[12.13rem] h-14 bg-[#A6F756] rounded-full text-xs tracking-[0.54px] font-bold'>
            Save Changes
          </button> */}
          <button className='flex justify-center items-center px-6 py-3 text-black w-[12.13rem] h-14 bg-[#A6F756] rounded-full text-xs tracking-[0.54px] font-bold'>
            {isEditMode ? 'Save Changes' : 'Create Plan'}
          </button>
        </div>
      </ModalBox>

      <DataTable columns={columns} rows={rows} />
    </div>
  );
};

export default SubscriptionPlans;
