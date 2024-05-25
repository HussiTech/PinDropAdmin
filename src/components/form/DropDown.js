import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const status = [{ name: "All" }, { name: "Active" }, { name: "Inactive" }];
const plan = [{ name: "Monthly" }, { name: "Yearly" }, { name: "Promo Code" }];

export default function DropDown({ title }) {
  const [selected, setSelected] = useState(status[0]);

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[8.2rem]'>
        <Listbox value={selected} onChange={setSelected}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-full cursor-default py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm'>
              <span className='truncate whitespace-nowrap uppercase flex justify-center items-center text-[#4F4F4F] font-light text-[0.63rem] relative'>
                {title}
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center mr-8'>
                <RiArrowDropDownLine className='text-3xl text-[#0774A3]' />
              </span>
            </Listbox.Button>
            {/* <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options className='absolute mt-1 h-auto w-full overflow-auto bg-[#F8F6FB] text-base shadow-dropdown focus:outline-none sm:text-sm'>
                {status.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4  ${
                        active
                          ? 'bg-[#A6F756] text-black border-b border-[#C9C5C5]'
                          : 'text-gray-900 border-b border-[#C9C5C5]'
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
            </Transition> */}
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options className='absolute mt-2 -ml-6 h-auto w-full overflow-auto bg-[#F8F6FB] text-base shadow-dropdown focus:outline-none sm:text-sm'>
                {title === "Status"
                  ? status.map((option, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 capitalize ${
                            active
                              ? "bg-[#A6F756] text-black border-b border-[#C9C5C5]"
                              : "text-gray-900 border-b border-[#C9C5C5]"
                          }`
                        }
                        value={option}>
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}>
                              {option.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))
                  : plan.map((option, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 capitalize ${
                            active
                              ? "bg-[#A6F756] text-black border-b border-[#C9C5C5]"
                              : "text-gray-900 border-b border-[#C9C5C5]"
                          }`
                        }
                        value={option}>
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}>
                              {option.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
