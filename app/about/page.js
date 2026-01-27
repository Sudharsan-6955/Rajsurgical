"use client";

import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Heroabout from './Heroabout';
import TeamCarousel from './TeamCarousel';
import FooterSection from '@/components/FooterSection';
const inter = Inter({ subsets: ['latin'] });


const About = () => {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 md:px-16 lg:px-28 py-1 md:py-20 lg:py-14 ">
        {/* Hero */}
        <Heroabout />

        {/* What We Stand For Quality */}
        <section className="">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-left text-center sm:text-4xl lg:text-5xl font-normal leading-[1.2] md:leading-[1.25] lg:leading-[1.1] md:space-y-2">
                <span className='block'>What We </span>
                <span className='block'>Stand For Quality</span>
              </h2>
            </div>
            <div className={` text-center md:text-left text-sm sm:text-sm py-2 md:py-0 text-gray-700 md:leading-normal ${inter.className}`}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
            </div>
          </div>
        </section>

        {/* Quality + Stats */}
        <section className="py-3 sm:py-5">
          {/* Full-width image */}
          <div className="relative w-full h-72 sm:h-96 md:h-[28rem] overflow-hidden rounded-2xl">
            <Image
              src="/images/About page/image-1.png"
              alt="Surgery Team"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* 2x2 stats grid */}
          <div className={`mt-6 grid grid-cols-2 gap-3 sm:gap-6 ${inter.className}`}>
            <div className="rounded-2xl p-6 sm:p-8 text-white bg-[#363543] flex justify-between min-h-[170px]">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold ">
                10<sup className="text-2xl sm:text-3xl">+</sup>
              </div>
              <div className="mt-auto text-xs sm:text-base sm:tracking-widest text-right">
                <span className="block">PRODUCTS</span>
                <span className="block">HAVE</span>
              </div>
            </div>

            <div className="rounded-2xl p-6 sm:p-8 text-white bg-[#535161] flex justify-between min-h-[170px]">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                30<sup className="text-2xl sm:text-3xl">+</sup>
              </div>
              <div className="mt-auto text-xs sm:text-base sm:tracking-widest text-right">
                <span className="block">PRODUCTS</span>
                <span className="block">HAVE</span>
              </div>
            </div>

            <div className="rounded-2xl p-6 sm:p-8 text-white bg-[#1D4E52] flex justify-between min-h-[170px]">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                80<sup className="text-2xl sm:text-3xl">+</sup>
              </div>
              <div className="mt-auto text-xs sm:text-base sm:tracking-widest text-right">
                <span className="block">PRODUCTS</span>
                <span className="block">SERVICES</span>
              </div>
            </div>

            <div className="rounded-2xl p-6 sm:p-8 text-white bg-[#22456B] flex justify-between min-h-[170px]">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                50<sup className="text-2xl sm:text-3xl">+</sup>
              </div>
              <div className="mt-auto text-xs sm:text-base sm:tracking-widest text-right">
                <span className="block">PRODUCTS</span>
                <span className="block">HAVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className="py-5 sm:py-7 lg:py-8">
          <h2 className={`text-3xl ${inter.className} sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14`}>WHAT WE DO</h2>

          <div className="max-w-5xl mx-auto bg-white rounded-xl px-2 md:px-24">

            {/* BRANDING */}
            <div className="py-8 sm:py-10 border-b sm:border-b-2 border-[#767676]">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-6 md:gap-12 items-start md:items-center">
                {/* Left: Icon + Title */}
                <div className="flex items-start gap-4 sm:gap-6 mx-auto">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
                    <Image
                      src="/images/About page/brand.svg"
                      alt="Quality award icon"
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <div className={`${inter.className} text-[#303A60]`}>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-wide">BRANDING</h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">Preception & Awareness</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[2px] bg-[#000000] h-full min-h-[96px] justify-self-center" />

                {/* Right: Description */}
                <div className="text-sm text-[#535161] md:text-left text-center sm:text-base  leading-relaxed">
                  <p>Get the right people saying the right things about your brand.</p>
                </div>
              </div>
            </div>

            {/* PRODUCT */}
            <div className="py-8 sm:py-10 border-b sm:border-b-2 border-[#767676]">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-6 md:gap-12 items-start md:items-center">
                {/* Left: Icon + Title */}
                <div className="flex items-start gap-4 sm:gap-6 mx-auto">
                  <div className="flex-shrink-0 w-14 h-14 text-[#1D4E52]  sm:w-16 sm:h-16">
                    <Image
                      src="/images/About page/package.svg"
                      alt="Quality award icon"
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <div className={`${inter.className} text-[#1D4E52]`}>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-wide">PRODUCT</h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">Pop-Ups & Showrooms</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[2px] bg-[#000000] h-full min-h-[96px] justify-self-center" />

                {/* Right: Description */}
                <div className="text-sm sm:text-base md:text-left text-center text-[#1D4E52] leading-relaxed">
                  <p>We make your product the keystone of your communication. Touch it, feel it, live it </p>
                </div>
              </div>
            </div>

            {/* QUALITY */}
            <div className="py-8 sm:py-10">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-6 md:gap-12 items-start md:items-center">
                {/* Left: Icon + Title */}
                <div className="flex items-start gap-4 sm:gap-6 mx-auto">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
                    <Image
                      src="/images/About page/award.svg"
                      alt="Quality award icon"
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>
                  <div className={`${inter.className} text-[#535161]`}>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-wide">QUALITY</h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">Quality of the product</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[2px] bg-[#000000] h-full min-h-[96px] justify-self-center" />

                {/* Right: Description */}
                <div className="text-sm sm:text-base md:text-left text-center text-[#535161] leading-relaxed">
                  We assure for the Quality of the small to big product of ours.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-3 sm:py-5 lg:py-6">
          <div className="">
            <div className="max-w-[63rem] mx-auto grid md:grid-cols-2 gap-2 md:gap-11 items-center">
              <div>
                <h2 className="text-3xl font-semibold md:text-left text-center sm:text-4xl lg:text-5xl  tracking-tight  leading-[1.2] md:leading-[1.25] lg:leading-[1.1] md:space-y-2 ">
                  <span className='block'>OUR</span>
                  <span className='block'>TEAMS</span>
                </h2>
              </div>
              <div className={` text-center md:text-left text-sm sm:text-sm text-gray-700 leading-normal ${inter.className}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
              </div>
            </div>
          </div>
          <div className="md:mt-7 mt-4">
            <TeamCarousel />
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default About;
