import React from 'react';

const DataTable = ({ columns, rows }) => {
  return (
    <div className='flex w-full flex-col items-center justify-center mt-6'>
      <div className='overflow-x-auto w-full rounded-xl shadow-table'>
        <table className='min-w-full bg-white text-sm'>
          <thead className='bg-[#F8F6FB] text-center sticky top-0'>
            <tr className='h-12'>
              {columns?.map((column) => (
                <th
                  key={column.key}
                  className='whitespace-nowrap uppercase px-4 py-2 text-[#4F4F4F] font-light text-[0.63rem]'>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y text-center divide-gray-200 mx-4'>
            {rows?.map((row, i) => (
              <tr key={i} className='h-12'>
                {columns?.map((column) => (
                  <td
                    key={column.key}
                    className='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
