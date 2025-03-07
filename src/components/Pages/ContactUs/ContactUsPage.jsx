import React, { useState } from "react";
import axios from "axios";

function ContactUsPage() {
  const [isSending, setIsSending] = useState(false);
  const sendEmail = async (data) => {
    setIsSending(true);
    const res = await axios.post(
      "http://192.168.0.130/final_project/final_project/Api's/contact.php",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setIsSending(false);
    return res.data;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const res = await sendEmail(data);
    alert(res.message);
  }

  return (
    <div className='flex flex-col justify-between items-center sm:gap-3 p-5 w-full font-semibold'>
      <h1 className='sm:text-5xl text-4xl p-3 font-bold text-red-500'>
        Contact Us
      </h1>
      <div className='flex grow lg:w-[600px]'>
        <form
          id='contact-us-form'
          className='flex flex-col grow h-max gap-3 shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-lg p-5 justify-center overflow-auto sm:text-xl text-lg'
          onSubmit={handleSubmit}>
          <div className='flex max-sm:flex-col sm:gap-3 w-full justify-between sm:items-center'>
            <p className='text-gray-700 min-w-30 text-start'>Name:</p>
            <input
              required
              type='name'
              id='name'
              name='name'
              placeholder='TempName'
              className='bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-lg px-3 py-1'
            />
          </div>
          <div className='flex max-sm:flex-col sm:gap-3 w-full justify-between sm:items-center'>
            <p className='text-gray-700 min-w-30 text-start'>Email:</p>
            <input
              required
              type='email'
              id='email'
              name='email'
              placeholder='tempmail@xmail.com'
              className='bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-lg px-3 py-1'
            />
          </div>
          <div className='flex max-sm:flex-col sm:gap-3 w-full justify-between sm:items-center'>
            <p className='text-gray-700 min-w-30 text-start'>Phone:</p>
            <input
              required
              type='tel'
              id='phone'
              name='phone'
              placeholder='+91 123456789'
              className='bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-lg px-3 py-1'
            />
          </div>
          <div className='flex max-sm:flex-col sm:gap-3 w-full justify-between sm:items-center'>
            <p className='text-gray-700 min-w-30 text-start'>Message:</p>
            <textarea
              required
              rows={3}
              id='message'
              name='message'
              placeholder='Enter your Message'
              className='resize-none bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-lg px-3 py-1'
            />
          </div>
          <button
            type='submit'
            disabled={isSending}
            className={`${
              isSending
                ? "bg-gray-500 text-gray-200 translate-y-2"
                : "bg-red-500 text-white hover:shadow-xl shadow-lg cursor-pointer active:translate-y-2 active:shadow-none "
            } py-2 rounded-lg tracking-wide shadow-gray-400 duration-300 `}>
            {isSending ? "Sending . . ." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
