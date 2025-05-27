import React, { useState } from 'react';
import Image from "../assets/Checkout.jpg"
import emailjs from '@emailjs/browser'
function Checkout() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("form submitted")
    emailjs.sendForm('service_rj4rmh9','template_1pm8sj6',e.target,'cqLX-Zq-H960pkTqQ'); 
     
  };

  return (
    <div className="flex flex-col lg:flex-row items-center max-w-4xl mx-auto bg-white shadow-2xlS rounded-md px-6
    py-8 mt-4 mb-6">
      
      
      <div className="w-full lg:w-1/2 flex justify-center ">
        <img src={Image} alt="Checkout Illustration" className="rounded-lg max-w-full h-auto" />
      </div>
      
  
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex flex-col justify-center p-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="hidden">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col mt-1">
          <label htmlFor="phone" className="hidden">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            required
          />
        </div>
        
        <div className="flex flex-col mt-2">
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            type="subject"
            name="title"
            id="title"
            placeholder="title"
            onChange={handleChange}
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="message" className="hidden">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            onChange={handleChange}
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="mt-4 py-3 px-4 rounded-lg bg-yellow-500 text-white
           font-semibold hover:bg-yellow-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Checkout;
