import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-6">
              <FaFacebook size={28} className="hover:text-blue-500 transition" />
              <FaTwitter size={28} className="hover:text-blue-400 transition" />
              <FaInstagram size={28} className="hover:text-pink-500 transition" />
              <FaLinkedinIn size={28} className="hover:text-blue-700 transition" />
            </div>
            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-center">
                &copy; 2024 Daniyal Malik. All rights reserved.
              </p>
              <p className="text-sm text-center">Supportive Partner ❤️ Daniyal</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
