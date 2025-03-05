import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaSquarePhone, FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12">

        <div className="items-center mb-3">
          <h1 className="text-2xl font-bold">Lele Sasto Ghar Jagga Karobar Kendra</h1>
          <p>Welcome to Lele Sasto Ghar Jagga Karobar Kendra, your premier destination for all things real estate in the heart of Lalitpur. Whether you're looking to buy, sell, or rent property, our company offers a seamless, user-friendly experience that connects buyers directly with sellers, ensuring a transparent and efficient transaction process. Lele Sasto Ghar Jagga Karobar Kendra is a renowned and leading real estate brokerage agency in Lalitpur. we give you the best deals possible.</p>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61572970565111" target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl 
                            hover:text-gray-300" />
            </a>
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%2540%25E0%25A4%25B8%25E0%25A4%25B8%25E0%25A5%258D%25E0%25A4%25A4%25E0%25A5%258B.%25E0%25A4%2598%25E0%25A4%25B0%25E0%25A4%259C%25E0%25A4%2597%25E0%25A5%258D%25E0%25A4%2597%25E0%25A4%25BE%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1vZ6OKEs6HYw0MEOKA2NWBFCwIOhRx-X0PiktXKqW5kmRYgn-XTBqaq2U_aem_IrfFTmIGO_Dr1pJTS-fpuA&h=AT2tFRaWGgh9i8w6Qtv565qx5ZRnVwTmgQAzzkuhNBH3RfKtoB0D0IebE1Du2tYVdhJNKkBz3fUFa2NGc8h28TfIWLBZa_YAJdGGcaDFSz6v4E1t1E2Lbh2QPlGX0nQHnppJ" target="_blank"
              rel="noopener noreferrer">
              <FaYoutube className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Flelesastogharjagga%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2OlFv2VMzm70nuLQxbCzOew0VQ3-FjrxyySLjBEqMnc6qFnpuq77wANBw_aem_cFp03jhpkjriOxEepwRtOw&h=AT1ru-LdG9Dl3wXBzOzOkbWfaOHYKCFSHpQSwTWUpR-X0OZj00ybSnXzfn5VAJoydxzCbWwJR_chsMRWuM9WUjUW9q5OqCiLQThPDeiZ76BQjWRm5TwpfDZixHYJJLqAv8EZ" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://www.tiktok.com/@lelesastogharjagga100?_t=ZS-8uOJSX2Ficc&_r=1" target="_blank"
              rel="noopener noreferrer">
              <FaTiktok className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
          </div>
        </div>
        <div className='space-x-4'>
          <h3 className="text-xl font-bold mb-4 text-center">Contacts</h3>
          <p className='flex gap-4'><FaSquarePhone className='w-10 h-10' />
            +9779765726294, +9779818366209, +9779849150004 </p>
          <p className='flex gap-4'> <FaMapLocationDot className='w-10 h-10' />Godawari Municipality-6, Faidol, lalitpur </p>
          <span className='gap-4' ><MdEmail className='w-10 h-10' />info.lelesastogharjaggakarobar@gmail.com <br /> advertisement@lelesastogharjagga.com.np</span>

        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Browse Proprties</h3>
          <ul className='items-center'>
            <li><a href="#" className="hover:underline">
              Buy</a></li>
            <li><a href="#" className="hover:underline">
              Rent</a></li>
            <li><a href="#" className="hover:underline">
              House</a></li>
            <li><a href="#" className="hover:underline">
              Land</a></li>
            <li><a href="#" className="hover:underline">
              Shop</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className='items-center'>
            <li><a href="/social-media" className="hover:underline">
              Connect WIth Us</a></li>
            <li><a href="https://www.dolma.gov.np/office/dept/content/minium-land-valuation-2081-82-1723100263" className="hover:underline">
              Valuation of Land</a></li>
            <li><a href="#" className="hover:underline">
              Home Loan </a></li>
            <li><a href="/privacy-policy" className="hover:underline">
              Private Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:underline">
              Term and Conditions</a></li>
          </ul>
        </div>


      </div>
      <hr />
      <div className='mt-3'>
      Disclaimer: lelesastogharjagga.com.np is a Real Estate Marketplace and Information Platform designed to assist Real Estate Agencies, Private Sellers and Buyers, Developers, and does not manage or influence any transactions between Sellers, Agents, or Buyers. The information provided on the website is for informational purposes only. Details regarding real estate projects, including property/project descriptions, listings, floor area, and location data, have been collected from various sources on a best-effort basis. Nothing contained herein constitutes legal advice, solicitation, marketing, an offer for sale, or an invitation to acquire by any entity.
      </div>
      <hr />
      <div className='bg-slate-500 mt-3 items-center'>
        <div className='items-start float-left'>
          <p className='flex items-center text-black'><MdCopyright />2025 <span className='text-white'> : Lele Sasto Ghar jagga Karobar Kendra </span>. All Rights Reserve</p>
        </div>
        <div className='items-end float-end text-black'>
          Developed by:
          <Link href="https://prabindangol.com.np" className='cursor-pointer text-white hover:text-red-600'> Prabin Dangol</Link>
        </div>
      </div>
    </footer>
  );
};
