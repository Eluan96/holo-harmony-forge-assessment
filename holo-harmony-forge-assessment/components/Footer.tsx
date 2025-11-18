"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AArrowDown, Facebook } from 'lucide-react';

// --- Reusable Icon Components ---
// const FacebookIcon = () => <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>;
const TwitterIcon = () => <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.6.164-1.24.2-1.875.1-1.04-1.8 2.3-3.2 4.5-3.2.9 1.1 2.3 1.8 3.8 1.8 1.1 0 2.2-.2 3.2-.5 1.5 1.2 3.4 1.9 5.4 1.9.9 0 1.8-.1 2.7-.2 1.3.9 2.9 1.4 4.6 1.4.2 0 .4 0 .6-.1.6-.1 1.2-.3 1.8-.5.9-.3 1.8-.8 2.6-1.4.9-.6 1.7-1.3 2.5-2.1.8-.8 1.5-1.7 2.1-2.6.6-.9 1.1-1.8 1.4-2.7.3-.9.5-1.8.5-2.7z"/></svg>;
const LinkedInIcon = () => <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.022.632-3.394 2.484-3.394 1.852 0 2.484 1.373 2.484 3.394v8.396h4.98v-10.297c0-4.006-2.065-5.703-4.783-5.703-2.223 0-3.377 1.24-3.958 2.433h-.052v-2.133z"/></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const TestIcon = () => <AArrowDown />


const Footer = () => {
  return (
    <footer className="bg-[#0A2A57] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-xl">
                    <span className="text-white font-bold text-2xl">AT</span>
                </div>
                <div>
                    <span className="text-2xl font-bold text-white">AfCFTA</span>
                    <p className="text-sm text-gray-400">Digital Trade Portal</p>
                </div>
            </div>
            <p className="mt-4 text-sm">
              Connecting Nigerian businesses to Africa through seamless digital trade.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><TwitterIcon /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><LinkedInIcon /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><TestIcon /></a>

            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">Features</Link></li>
              <li><Link href="#" className="hover:text-white">How It Works</Link></li>
              <li><Link href="#" className="hover:text-white">Benefits</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold text-white text-lg">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white">Knowledge Hub</Link></li>
              <li><Link href="#" className="hover:text-white">Trade Guides</Link></li>
              <li><Link href="#" className="hover:text-white">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-bold text-white text-lg">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <LocationIcon />
                <span>Federal Ministry of Industry, Trade & Investment, Abuja, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon />
                <span>+234 (0) 900 000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <EmailIcon />
                <span>info@afcfta.gov.ng</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border-white/10" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AfCFTA Digital Trade Portal. All rights reserved.</p>
          <div className="flex gap-x-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;