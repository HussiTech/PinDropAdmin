import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { IoMdArrowDropdown } from 'react-icons/io';
const option = [{ name: 'Super Admin' }, { name: 'Administrator' }];
export default function SelectOption() {
  const [selected, setSelected] = useState(option[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div>
        <Listbox.Button className='focus-within:border-theme-green  flex-grow border  appearance-none border-gray-300 outline-none relative w-full cursor-pointer rounded-2xl bg-white p-4 text-left  focus:outline-none  sm:text-sm'>
          <span className='block truncate'>{selected.name}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <IoMdArrowDropdown
              className='h-5 w-5 text-black'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Listbox.Options className=' absolute mt-1 max-h-60 md:w-[41.5rem] w-80  overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
            {option.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default  select-none py-2  ${
                    active ? 'bg-[#898989] text-white' : 'text-gray-900'
                  }`
                }
                value={person}>
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}>
                      {person.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
