import { useState } from "react";
import axios from "axios";
import { pageTitleClass, bodyText, primaryBtn } from "../styles/common";
import toast from "react-hot-toast";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/common-api/contact`, formData);
      toast.success("Thanks for contacting us! We'll get back to you soon.");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative isolate py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold tracking-wide mb-6 uppercase">
          Get in Touch
        </span>
        <h1 className={pageTitleClass + " mb-8 drop-shadow-sm"}>
          We'd Love to Hear From You
        </h1>
        <p className={bodyText + " mx-auto max-w-2xl text-gray-500"}>
          Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/40 p-8 md:p-12 rounded-[3rem] border border-white/60 shadow-xl shadow-indigo-500/5">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition" 
                placeholder="John" 
                required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition" 
                placeholder="Doe" 
                required 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition" 
              placeholder="john@example.com" 
              required 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">Message</label>
            <textarea 
              rows="5" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition resize-none" 
              placeholder="How can we help you?" 
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading} className={primaryBtn + " w-full mt-4 disabled:opacity-70 disabled:cursor-not-allowed"}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
