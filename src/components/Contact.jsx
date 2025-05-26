// https://formspree.io/f/xanogvwl
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
   const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xanogvwl", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      toast.success("✅ Message sent successfully!");
      e.target.reset();
    } else {
      toast.error(result?.errors?.[0]?.message || "❌ Something went wrong.");
    }
  }
  return (
    <section id='contact' className='flex flex-col py-10 items-center justify-center'>
    {/* heading */}
    <div className=" text-center mb-16">
        <h3 className="text-gray-400 text-2xl font-semibold">Contact</h3>
        <div className="w-24 bg-[#8245ec] h-1 mx-auto mt-2"></div>
        <p className="text-gray-400 font-semibold text-2xl mt-2">Let’s Connect and Create Something Great.</p>
      </div>
      <div className=' md:w-100 bg-[#0d081f] border-gray-500 border-2 px-5 py-5 rounded-lg flex flex-col items-center justify-center'>
        <h3 className='text-white font-bold text-lg'>Let's Connect 🤝</h3>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
            <input type='email'required name='user_mail' placeholder='Your Email' className='w-full p-1.5 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none  focus:border-purple-500'>
            </input>
             <input type='text'required name='user_name' placeholder='Your Name' className='w-full p-1.5 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none  focus:border-purple-500'>
            </input>
             <input type='text'required name='subject' placeholder='Mobile' className='w-full p-1.5 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none  focus:border-purple-500'>
            </input>
            <textarea rows={4} name='message' placeholder='message' className='w-full p-1.5 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none  focus:border-purple-500'></textarea>
            <button type='submit' className='w-full disabled={loading}  bg-gradient-to-r from-purple-600 to-pink-500 py-1.5 text-white font-semibold rounded-md hover:opacity-90 transition'>{loading ? "Sending..." : "Send Message"}</button>
        </form>
         <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </section>
  )
}
