import React, { useState } from "react";

/*
  Contact form behaviour:
  - This form validates fields locally and attempts to open the user's mail client via mailto as a fallback.
  - Optionally you can enable EmailJS (or Formspree) to actually send emails from the site.
    I include commented instructions below to enable EmailJS quickly.
*/

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) return false;
    // simple email check
    if (!/\S+@\S+\.\S+/.test(email)) return false;
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // === OPTION A: Simple mailto fallback (works without backend) ===
    // This opens user's email client with prefilled fields.
    const mailto = `mailto:gopalshivamsingh@gmail.com?subject=${encodeURIComponent(
      "Website enquiry from " + name
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`;

    // open mail client
    window.location.href = mailto;
    setStatus("success");

    /* 
    === OPTION B: EmailJS (uncomment to use)
    1) npm install emailjs-com
    2) create account on emailjs.com and get: serviceID, templateID, userID
    3) uncomment the code below and replace placeholders
    */
    /*
    try {
      const emailjs = (await import("emailjs-com")).default;
      const serviceID = "your_service_id";
      const templateID = "your_template_id";
      const userID = "your_user_id";
      await emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message,
      }, userID);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    */
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
          Let’s Build Something Together
        </h2>
        <p className="text-center text-gray-200 mb-8">
          Tell us about your project, budget & timeline — we’ll reply within one business day.
        </p>

        <div className="bg-white/6 backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              placeholder="Describe your project, needs, or question..."
              className="p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300"
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-3 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300 transition disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <a
                href="/projects"
                className="text-sm text-gray-200 hover:underline"
              >
                View our work
              </a>
            </div>

            {/* status messages */}
            {status === "success" && (
              <p className="text-green-300">Thanks — your email client opened. If you didn't send, try copying the message or use the contact email: hello@yourcompany.com</p>
            )}
            {status === "error" && (
              <p className="text-red-300">Please fill all fields with a valid email before sending.</p>
            )}
          </form>
        </div>

        {/* quick contact cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">
            <h4 className="font-semibold text-yellow-300">Email</h4>
            <p className="text-gray-200">hello@yourcompany.com</p>
            <p className="text-gray-400 mt-2 text-sm">Responses within 1 business day.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h4 className="font-semibold text-yellow-300">Location</h4>
            <p className="text-gray-200">India (Remote / Work worldwide)</p>
            <p className="text-gray-400 mt-2 text-sm">Available for remote & contract work.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
