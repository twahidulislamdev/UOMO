import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("validation");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_aonq8e9",
          template_id: "template_uguun54",
          user_id: "g3kkCWDzUpSwZ-YZV",
          template_params: formData,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">
          Get in <span className="text-red-500">Touch</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Have a question about your order, products, or anything else? Our team
          is ready to help you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* INFO CARD */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Contact Info
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 rounded-xl">
                  <FiMapPin className="text-red-500" />
                </div>
                <span className="text-gray-700">Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 rounded-xl">
                  <FiMail className="text-red-500" />
                </div>
                <span className="text-gray-700">twahid746@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 rounded-xl">
                  <FiPhone className="text-red-500" />
                </div>
                <span className="text-gray-700">+88 01825653993</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t text-sm text-gray-500">
              ⚡ Reply within a few hours
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Dhaka&output=embed"
              className="w-full h-[220px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* FORM */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Message</h2>

          {/* STATUS */}
          {status && (
            <div className="mb-4 text-sm">
              {status === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600">Failed to send message.</p>
              )}
              {status === "validation" && (
                <p className="text-yellow-600">Please fill all fields.</p>
              )}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="mt-5">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-xl outline-none"
            >
              <option value="">Select Subject</option>
              <option>Order Issue</option>
              <option>Product Inquiry</option>
              <option>Return / Refund</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mt-5">
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-center text-gray-400 text-sm mt-16">
        We respect your privacy. Your data is safe with us.
      </p>
    </div>
  );
};

export default Contact;
