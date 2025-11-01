import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0a4a43] text-white pt-14 pb-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        <div>
          <h3 className="text-3xl font-bold mb-4">Trendspire</h3>
          <p className="text-gray-200 leading-relaxed">
            Your fashion destination.  
            Stay trendy, stay stylish.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>

          <p className="text-gray-200">Uttar Pradesh, India</p>
          <p className="mt-2 text-gray-200">support@trendspire.com</p>
          <p className="mt-2 text-gray-200">+91 98765 43210</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Account</h3>

          <ul className="space-y-2 text-gray-200">
            <li>Login / Register</li>
            <li>My Account</li>
            <li>Cart</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>

          <div className="flex items-center gap-4 mt-3">
            <a href="https://github.com/sarthaksharma52" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition cursor-pointer">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/sarthak-sharma-778b28257/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition cursor-pointer">
              <FaLinkedin size={22} />
            </a>
            <a href="https://x.com/sarthaksha49075" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition cursor-pointer">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300 text-sm">
        <p>© {new Date().getFullYear()} Trendspire. All rights reserved.</p>
      </div>
    </footer>
  );
}
