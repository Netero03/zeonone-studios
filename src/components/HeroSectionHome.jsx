import React from 'react'
import { HeroSectionBg } from '../assets/photos'

const HeroSectionHome = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax background image */}
            <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${HeroSectionBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            {/* Legacy text */}
            <div className="z-10 text-white garamond text-center text-5xl font-bold md:flex md:flex-row md:gap-4  " style={{ opacity: 1 - scrollY / 400 }}>
                <span className="block">Legacy</span>
                <span className="block">of</span>
                <span className="block">Storytelling</span>
                <span className="block">& Entertainment</span>
            </div>
        </section>)
}

export default HeroSectionHome