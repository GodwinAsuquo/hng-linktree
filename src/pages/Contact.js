import React from "react";
import { useState } from "react";

const Contact = () => {
  const [messageFields, setMessageFields] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (messageFields.length === 0) {
      setError(true);
    }
  };

  return (
    <section className="px-4 py-10 md:px-52">
      <h3 className="text-4xl font-semibold my-5">Contact Me</h3>
      <p className="text-[#475467] text-lg mb-10">
        Hi there, contact me to ask me about anything you have in mind.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="md:flex md:space-x-4">
          <div className="flex flex-col my-8 md:my-0 md:w-full">
            <label htmlFor="first_name" className="text-[#344054]">
              First Name
            </label>
            <input
              type="text"
              required
              id="first_name"
              placeholder="Enter your first name"
              className="outline-none border border-[#D0D5DD] rounded-md mt-1 p-2 placeholder:text-[#667085]"
            />
          </div>
          <div className="flex flex-col my-8 md:my-0 md:w-full">
            <label htmlFor="last_name" className="text-[#344054]">
              Last Name
            </label>
            <input
              type="text"
              required
              id="last_name"
              placeholder="Enter your last name"
              className="outline-none border border-[#D0D5DD] rounded-md mt-1 p-2 placeholder:text-[#667085]"
            />
          </div>
        </div>
        <div className="flex flex-col my-8">
          <label htmlFor="email" className="text-[#344054]">
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            placeholder="yourname@email.com"
            className="outline-none border border-[#D0D5DD] rounded-md mt-1 p-2 placeholder:text-[#667085]"
          />
        </div>
        <div className="flex flex-col my-8">
          <label htmlFor="message" className="text-[#344054]">
            Message
          </label>
          <textarea
            onChange={(e) => setMessageFields(e.target.value)}
            type="email"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            className="outline-none border border-[#D0D5DD] rounded-md mt-1 p-2 placeholder:text-[#667085] h-40"
          />
          {error && messageFields.length <= 0 ? (
            <span className="text-[red]">Please enter a message</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              required
              id="checkbox"
              className="mr-3 outline-[yellow] p-4"
            />
          </div>
          <label htmlFor="checkbox" className="text-[#475467]">
            You agree to providing your data to Asuquo who may contact you.
          </label>
        </div>
        <button
          type="submit"
          id="btn__submit"
          className="bg-[#1570EF] text-white p-3 w-full rounded-lg mt-8 hover:bg-[#175CD3] disabled:bg-[#B2DDFF]"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
