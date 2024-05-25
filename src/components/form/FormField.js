import React from 'react';

const FormField = (props) => {
  const { customClass, preIcon, sufIcon, ...rest } = props;
  return (
    <>
      <div
        className={`h-14 border border-gray-300 flex gap-3 justify-start items-center rounded-2xl overflow-hidden p-4 bg-white ${customClass}`}>
        {preIcon ? preIcon : null}
        <input className='w-full outline-none  ' {...rest} />
        {sufIcon ? sufIcon : null}
      </div>
    </>
  );
};

export default FormField;
