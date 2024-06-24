// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBg } from '../assets/photos';
import { Zoom } from 'react-awesome-reveal';
import { ZenoneLogo } from '../assets/icons';

function AddressItem({ iconSrc, text, altText = "" }) {
  return (
    <div className="flex gap-5 leading-6">
      <img loading="lazy" src={iconSrc} alt={altText} className="shrink-0 my-auto aspect-square w-[26px] " />
      <div className="grow justify-center w-fit">{text}</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-10 bg-gradient-to-tl from-[#fff] to-[#fff] max-md:px-5 z-50 poppins-regular relative">
      <style >{`
    .bg-image {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${FooterBg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.3; /* Adjust the opacity as needed */
      z-index: -1;
      
    }
  `}</style>
      <div className="bg-image"></div>
      <section className="flex gap-5 mt-10 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <nav className="flex flex-col justify-center text-xl font-medium leading-3 text-center text-black md:w-[400px] w-[400px]">
          <header className="text-4xl font-semibold leading-8">Useful Links</header>
          <div className="mt-12 font-normal max-md:mt-10 gap-10 flex flex-col">
            <Link to='/'>Home</Link>
            <Link to='/films' className="">Projects</Link>
            <Link to='/about-us' className="">About Zenone</Link>
            <Link to='/key-team' className="">Key Team</Link>
            <Link to='/contact-us' className="">Contact Us</Link>
          </div>
        </nav>
        <address className="flex-auto self-end mt-7 max-md:max-w-full md:mx-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-end py-0.5 pr-2.5 gap-5 text-base tracking-normal leading-6 text-black max-md:mt-10 max-md:max-w-full">
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ce5bfd978989a0532ef428505b232bd7aff0eb4b287faab41189ae85c39454aa?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text={`ZENONE STUDIOZ PVT. LTD.
                  FLAT 601 C WING,
                  MEERA TOWER,
                  OSHIWARA ANDHERI WEST
                  MUMBAI 400053`}
                  altText="Location Icon"
                />
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e03d2e5dc1b351c763fca3b6feb89d39f0d9a8f8c737752163eecec41df47d9d?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text="xyz@xyz.com"
                  altText="Email Icon"
                  className="mt-9 blackspace-nowrap"
                />
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7d1a57e583e07c2cf074e0f2ec553820cce3d868b96801fec6ff5ad0bc579d5?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text="www.zenone.in"
                  altText="Website Icon"
                  className="mt-8 blackspace-nowrap"
                />
                <AddressItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df42da39640a3122f671e0f79e8b68fa778d8ce25bb55d0e8e8bd69b6ea3e0cd?apiKey=fdc97f1298d9417ba73f632a312daddd&"
                  text=" +91 00000-00000"
                  altText="Phone Icon 1"
                  className="mt-8 text-black"
                />

              </div>
            </div>
            <div className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full md:gap-10 justify-center items-center">
              <img src={ZenoneLogo} className='w-[200px] pt-10' loading='lazy'/>
              <Link to='/contact-us' className="justify-center px-8 py-7 my-auto w-max text-2xl font-semibold tracking-tighter leading-7 text-center text-[#1C39BB] bg-white rounded-xl hover:shadow-md transition-shadow duration-300 shadow-2xl max-md:px-5 max-md:mt-10">
                <Zoom>Contact Us</Zoom>
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