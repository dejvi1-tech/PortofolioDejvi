import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const SERVICE_ID = "service_59fl6cr";
  const TEMPLATE_ID = "template_mcf7c59";
  const PUBLIC_KEY = "7nVyV_lI18OWeBXxQ";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "dejvi@example.com",
      href: "mailto:dejvi@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+355 XX XXX XXX",
      href: "tel:+355XXXXXXX"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Albania",
      href: "#"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Get in Touch</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a chat about technology and development.
                </p>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{method.title}</div>
                        <div className="text-gray-400 group-hover:text-blue-400 transition-colors">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: "💼", label: "LinkedIn", href: "#" },
                      { icon: "🐙", label: "GitHub", href: "#" },
                      { icon: "🐦", label: "Twitter", href: "#" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl hover:bg-blue-500/10 hover:border-blue-500/30 hover:scale-110 transition-all duration-300"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-strong p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send a Message</h3>

              {status && (
                <div className={`mb-6 p-4 rounded-xl ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {status.message}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 group-hover:border-white/20"
                    placeholder="Your full name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 group-hover:border-white/20"
                    placeholder="your.email@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 group-hover:border-white/20 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isLoading
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};