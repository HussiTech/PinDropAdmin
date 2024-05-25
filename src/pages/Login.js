import React, { useState } from "react";
import FormField from "../components/form/FormField";
import { TbLock } from "react-icons/tb";
import { PiEyeSlash } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    updateButtonState(newEmail, password);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    updateButtonState(email, newPassword);
  };

  const isValidEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const updateButtonState = (email, password) => {
    setIsButtonEnabled(
      isValidEmail(email) && email.trim() !== "" && password.trim() !== ""
    );
  };

  return (
    <>
      <div className='w-full h-screen bg-theme flex justify-center items-center '>
        <div className='md:w-[30.5rem] w-80 h-[38rem] bg-white rounded-[0.65rem] flex justify-center items-center py-10 md:px-20 '>
          <div className='flex flex-col w-full h-full  '>
            <div className='w-full h-[8rem]  flex flex-col items-center gap-2'>
              <img src='/images/pinDropLogo.svg' alt='' />
              <span className='flex gap-4 md:text-[2.3rem] text-xl text-theme'>
                <h1 className='font-normal tracking-[1.096px]'>PINDROP</h1>
                <h1 className='font-bold tracking-[1.096px]'>TRAVEL</h1>
              </span>
            </div>
            <div className='py-10 px-8 md:px-0 flex flex-col gap-5'>
              <div className='flex flex-col gap-4 '>
                <p className='text-[0.88rem] font-bold'>Email</p>
                <FormField
                  type='email'
                  customClass=''
                  value={email}
                  onChange={handleEmailChange}
                />
                {!isValidEmail(email) && (
                  <p className='text-red-500 text-sm'>
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <div className=' flex flex-col gap-4 '>
                <p className='text-[0.88rem] font-bold'>Password</p>
                <FormField
                  type='password'
                  customClass=''
                  preIcon={<TbLock className='text-2xl text-[#9CA3AF]' />}
                  sufIcon={<PiEyeSlash className='text-2xl text-[#9CA3AF]' />}
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <p className='text-theme text-[0.88rem] font-bold flex justify-end px-4'>
                  Reset password
                </p>
              </div>
            </div>
            <div className=''>
              <button
                onClick={() => navigate("/dashboard")}
                className={`p-4 w-[20.45rem] h-14 rounded-[12.5rem] justify-center items-center text-center text-[0.88rem] font-bold ${
                  isButtonEnabled
                    ? "bg-[#A6F756] text-black"
                    : "bg-[#969696] pointer-events-none text-white"
                }`}
                disabled={!isButtonEnabled}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
