// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBg } from '../assets/photos';

function AddressItem({ iconSrc, text, altText = "" }) {
  return (
    <div className="flex gap-5 leading-6">
      <img loading="lazy" src={iconSrc} alt={altText} className="shrink-0 my-auto aspect-square w-[26px]" />
      <div className="grow justify-center w-fit">{text}</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-10 bg-gradient-to-t from-[#79aded] to-[#f7f7f7] max-md:px-5 z-50 poppins-regular"
      >
      <section className="flex gap-5 mt-10 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <nav className="flex flex-col justify-center text-xl font-medium leading-3 text-center text-black md:w-[400px] w-[400px]">
          <header className="text-4xl font-semibold leading-8">Useful Links</header>
          <div className="mt-12 max-md:mt-10 gap-10 flex flex-col">
            <Link to='/films'>About Zenone</Link>
            <Link to='/films' className="">Projects</Link>
            <Link to='/about-us' className="">About Us</Link>
            <Link to='/key-team' className="">Key Team</Link>
            <Link to='/contact-us' className="">Contact Us</Link>
          </div>
        </nav>
        <address className="flex-auto self-end mt-7 max-md:max-w-full md:mx-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-end py-0.5 pr-2.5 gap-5 text-base tracking-normal leading-6 text-black max-md:mt-10 max-md:max-w-full">
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ad920dc27e95075f4d11a0e6f11877a354cf5ed23d2ab1dc6a429ddbfa1f0d58?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text={`ZENONE STUDIOZ PVT. LTD.
                  FLAT 601 C WING,
                  MEERA TOWER,
                  OSHIWARA ANDHERI WEST
                  MUMBAI 400053`}
                  altText="Location Icon"
                />
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/471acdeb6b20c2e3757afd263cac53c84ffcbfb4a345e3d3512453cbd58fd6e6?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text="xyz@xyz.com"
                  altText="Email Icon"
                  className="mt-9 blackspace-nowrap"
                />
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a9c1065eda276376247d782784c47a8f35072f81200b8ac28b2661029d7d0d1e?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text="www.zenone.in"
                  altText="Website Icon"
                  className="mt-8 blackspace-nowrap"
                />
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c7eeb3da8e240bef793074f82b595fcb976886dbb60a8259de0d6133771f0502?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text=" +91 00000-00000"
                  altText="Phone Icon 1"
                  className="mt-8 text-black"
                />

              </div>
            </div>
            <div className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full">
              <Link to='/contact-us' className="justify-center self-stretch px-8 py-7 my-auto w-full text-2xl font-semibold tracking-tighter leading-7 text-center text-[#1C39BB] bg-white rounded-xl shadow-sm max-md:px-5 max-md:mt-10">
                Contact Us
              </Link>
            </div>
          </div>
        </address>
      </section>
      <div className="container mx-auto flex justify-center mt-10">
        <p className="text-black text-sm md:md">&copy; {new Date().getFullYear()} Zenone Studioz PVT. LTD. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;