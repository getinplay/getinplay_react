import React from "react";
import axios from "axios";
import { useState } from "react";

function ContactUsForm() {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("Error");
  const sendEmail = async (data) => {
    setIsSending(true);
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/Api's/contact.php`,
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
    <div className='flex grow lg:w-[800px] font-semibold'>
      <form
        id='contact-us-form'
        className='flex flex-col grow h-max gap-3 shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-lg p-5 justify-center items-end overflow-auto sm:text-xl text-lg'
        onSubmit={handleSubmit}>
        <div className='flex sm:gap-5 gap-3 flex-col sm:flex-row'>
          <div className='flex max-sm:flex-col sm:gap-3 w-full justify-between sm:items-center'>
            <label
              htmlFor='name'
              className='required text-gray-700 min-w-25 text-start'>
              Name:
            </label>
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
            <label
              htmlFor='phone'
              className='required text-gray-700 min-w-20 text-start'>
              Phone:
            </label>
            <input
              required
              type='tel'
              id='phone'
              name='phone'
              placeholder='+91 123456789'
              className='bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-lg px-3 py-1'
            />
          </div>
        </div>
        <div className='flex max-sm:flex-col sm:gap-3 w-full justify-between sm:items-center'>
          <label
            htmlFor='email'
            className='required text-gray-700 min-w-25 text-start'>
            Email:
          </label>
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
          <label
            htmlFor='message'
            className='required text-gray-700 min-w-25 text-start'>
            Message:
          </label>
          <textarea
            required
            rows={3}
            id='message'
            name='message'
            placeholder='Enter your Message'
            className='resize-none bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-lg px-3 py-1'
          />
        </div>
        <div className='flex bg-green-100 w-full justify-between items-center'>
          <p className="pl-3 text-red-600">{error}</p>
          <button
            type='submit'
            disabled={isSending}
            className={`${
              isSending
                ? "bg-gray-500 text-gray-200 translate-y-2"
                : "bg-red-600 text-white hover:shadow-xl shadow-lg cursor-pointer active:translate-y-2 active:shadow-none "
            } sm:text-lg w-[160px] p-1 rounded-lg tracking-wide shadow-gray-400 duration-300 `}>
            {isSending ? "SENDING . . ." : "SEND MESSAGE"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
