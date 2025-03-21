import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";

function ContactUsForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (data) => {
    setIsSending(true);

    return toast
      .promise(
        axios.post(`${import.meta.env.VITE_API_URL}/Api's/contact.php`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        }),
        {
          pending: "Sending Email...",
          success: "Email Sent Successfully!",
          error: "Error sending email. Please try again.",
        }
      )
      .then((res) => {
        setIsSending(false);
        return res.data;
      })
      .catch((error) => {
        setIsSending(false);
        return { success: false, message: "Error sending email." };
      });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errorMessage = "";

    if (!name) {
      errorMessage = "Name is required!";
    } else if (!phone) {
      errorMessage = "Phone no. is required!";
    } else if (!phoneRegex.test(phone)) {
      errorMessage = "Enter a valid phone no.!";
    } else if (!email) {
      errorMessage = "Email is required!";
    } else if (!emailRegex.test(email)) {
      errorMessage = "Enter a valid email address!";
    } else if (!message) {
      errorMessage = "Message is required!";
    }

    if (errorMessage) {
      toast.error(errorMessage, {
        toastId: errorMessage,
        position: "top-center",
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
      return;
    }

    const data = { name, phone, email, message };
    await sendEmail(data);
  }

  return (
    <div className='flex grow lg:w-[800px] font-semibold'>
      <form
        noValidate
        id='contact-us-form'
        className='flex flex-col grow h-max gap-3 shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-lg p-5 justify-center items-end overflow-auto sm:text-xl text-lg'
        onSubmit={handleSubmit}>
        <div className='flex sm:gap-5 gap-3 flex-col sm:flex-row max-sm:w-full'>
          <div className='flex max-sm:flex-col sm:gap-3 w-full justify-between sm:items-center'>
            <label
              htmlFor='name'
              className='required text-gray-700 min-w-25 text-start'>
              Name:
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type='tel'
              id='phone'
              name='phone'
              placeholder='9123456789'
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            id='message'
            name='message'
            placeholder='Enter your Message'
            className='resize-none bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-lg px-3 py-1'
          />
        </div>
        <div className='flex max-sm:flex-col w-full justify-end items-center'>
          <button
            type='submit'
            disabled={isSending}
            className={`${
              isSending
                ? "bg-gray-500 text-gray-200 translate-y-2"
                : "bg-[#4A5BE6] text-white hover:shadow-xl shadow-lg cursor-pointer active:translate-y-2 active:shadow-none "
            } sm:text-lg w-[160px] p-1 rounded-lg tracking-wide shadow-gray-400 duration-300 `}>
            {isSending ? "SENDING . . ." : "SEND MESSAGE"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
