import React from "react";

function ContactUsPage() {
  return (
    <div className="flex flex-col justify-between items-center gap-3 p-5 w-full font-semibold">
      <h1 className="sm:text-5xl text-4xl p-3 font-bold text-red-500">
        Contact Us
      </h1>
      <div className="flex grow lg:w-[900px]">
        <form
          className="flex flex-col grow h-max gap-3 shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-xl p-5 justify-center overflow-auto sm:text-xl text-lg"
          onSubmit={(e) => e.preventDefault()}>
          <div className="flex max-sm:flex-col gap-3 w-full justify-between sm:items-center">
            <p className="text-gray-700 min-w-30 text-start">Email:</p>
            <input
              required
              type="email"
              placeholder="tempmail@xmail.com"
              className="bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-full px-3 py-1"
            />
          </div>
          <div className="flex max-sm:flex-col gap-3 w-full justify-between sm:items-center">
            <p className="text-gray-700 min-w-30 text-start">Phone:</p>
            <input
              required
              type="tel"
              placeholder="+91 123456789"
              className="bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-full px-3 py-1"
            />
          </div>
          <div className="flex max-sm:flex-col gap-3 w-full justify-between sm:items-center">
            <p className="text-gray-700 min-w-30 text-start">Name:</p>
            <input
              required
              type="name"
              placeholder="TempName"
              className="bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-full px-3 py-1"
            />
          </div>
          <div className="flex max-sm:flex-col gap-3 w-full justify-between sm:items-center">
            <p className="text-gray-700 min-w-30 text-start">Message:</p>
            <textarea
              rows={3}
              placeholder="[Optional]"
              className="resize-none bg-gray-200 w-full font-medium text-gray-600 border-none outline-none rounded-2xl px-3 py-1"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-200 py-1 rounded-full shadow-lg hover:shadow-xl cursor-pointer active:shadow-none active:translate-y-1 duration-300 text-gray-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
