import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contact */}
        <p className="mb-8 text-sm">
          Questions? Call{" "}
          <a href="tel:000-800-919-1694" className="hover:underline">
            000-800-919-1694
          </a>
        </p>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Speed Test
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal Notices
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ways to Watch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Only on Netflix
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Media Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Language Selector */}
        <div className="mb-6">
          <select
            className="bg-black border border-gray-500 px-2 py-1 text-sm"
            defaultValue="English"
          >
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        
        
      </div>
    </footer>
  );
};

export default Footer;
