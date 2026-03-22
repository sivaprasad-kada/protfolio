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
    <section id='contact' className='flex flex-col py-20 px-[7vw] lg:px-[12vw] items-center justify-center font-sans'>
      {/* heading */}
      <div className="text-center mb-12">
        <h3 className="text-gray-400 text-2xl font-semibold">Contact</h3>
        <div className="w-24 bg-[#8245ec] h-1 mx-auto mt-2"></div>
        <p className="text-gray-400 font-medium text-xl mt-4">Let’s Connect and Create Something Great.</p>
      </div>
      
      <div className='w-full max-w-lg bg-gray-900/80 backdrop-blur-md border border-white/20 p-8 sm:p-10 rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.15)] flex flex-col items-center justify-center hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] transition-shadow duration-300'>
        <h3 className='text-white font-bold text-2xl mb-6'>Let's Connect 🤝</h3>
        <form className='flex flex-col space-y-5 w-full' onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-5">
              <input type='text' required name='user_name' placeholder='Your Name' className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-colors text-sm sm:text-base'>
              </input>
              <input type='text' required name='subject' placeholder='Mobile' className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-colors text-sm sm:text-base'>
              </input>
            </div>
            <input type='email' required name='user_mail' placeholder='Your Email' className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-colors text-sm sm:text-base'>
            </input>
            <textarea rows={5} name='message' placeholder='Message' className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-colors resize-none text-sm sm:text-base'></textarea>
            
            <button type='submit' disabled={loading} className='w-full disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-[#8245ec] to-[#a855f7] py-3.5 text-white font-bold text-lg rounded-xl hover:shadow-[0_0_20px_rgba(130,69,236,0.5)] active:scale-[0.98] transition-all duration-300 mt-2'>
              {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="dark" />
      </div>
    </section>
  )
}
