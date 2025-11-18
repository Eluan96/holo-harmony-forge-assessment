"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-[#0A2A57] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-800 to-teal-400 p-2 rounded-xl">
                <span className="text-white font-bold text-2xl">AT</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">AfCFTA</span>
                <p className="text-sm text-gray-400 mt-[-5]">
                  Digital Trade Portal
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm">
              Connecting Nigerian businesses to Africa through seamless digital
              trade.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin />
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Trade Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div id="contacts">
            <h3 className="font-bold text-white text-lg">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
              <MapPin />
                <span>
                  Federal Ministry of Industry, Trade & Investment, Abuja,
                  Nigeria
                </span>
              </li>
              <li className="flex items-start gap-3">
              <Phone />
                <span>+234 (0) 900 000 0000</span>
              </li>
              <li className="flex items-start gap-3">
              <Mail />
                <span>info@afcfta.gov.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-white/10" />

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AfCFTA Digital Trade Portal. All
            rights reserved.
          </p>
          <div className="flex gap-x-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
