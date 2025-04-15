import React from 'react'
import { toast } from 'react-toastify';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9b60568-5ea6-4e94-b19a-5b8c99362f57");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.alert(data.message)
      setResult("");
    }
  };




  return (
    <motion.div 
    initial={{opacity:0,x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once: true}}

    
    
    
    className='' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' > Contact
            <span className='underline underline-offset-4 decoration-1 under font-light'> With Us
            </span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Ready to Make a Move ? Let's Build Your Future Together

        </p>

        <form
  onSubmit={onSubmit}
  className="max-w-2xl mx-auto text-gray-600 pt-12 px-4"
>
  <div className="flex flex-wrap gap-6">
    {/* Name Field */}
    <div className="w-full md:w-[48%] text-left">
      <label className="block mb-2 font-semibold text-gray-700">Your Name</label>
      <input
        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        type="text"
        name="Name"
        placeholder="Your Name"
        required
      />
    </div>

    {/* Email Field */}
    <div className="w-full md:w-[48%] text-left">
      <label className="block mb-2 font-semibold text-gray-700">Your E-Mail</label>
      <input
        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        type="email"
        name="email"
        placeholder="Your E-Mail"
        required
      />
    </div>
  </div>

  {/* Message Field */}
  <div className="my-6 text-left">
    <label className="block mb-2 font-semibold text-gray-700">Message</label>
    <textarea
      className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      placeholder="Your Message"
      name="message"
      required
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="flex justify-center">
    <button
      className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
      type="submit"
    >
     {result ? result : "Send Message"}
    </button>
  </div>
</form>



    </motion.div>

    
  )
}

export default Contact