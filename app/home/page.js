import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/app/home/TestimonialsSection';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="px-6 md:px-16 lg:px-28 py-12 md:py-20 lg:py-14">
                    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center gap-8 lg:gap-16 w-full">
                        {/* Left Side - Content */}
                        <div className="flex-1 flex flex-col justify-center">
                            <h1 className="text-5xl  md:text-5xl lg:text-6xl text-center  md:text-left font-[300] text-gray-900 leading-[1.2] md:leading-[1.25] lg:leading-[1.1] mb-6">
                                Find perfect medical products for safe
                            </h1>
                            <p className={`${inter.className} text-gray-600 text-center md:text-left  text-md font-light  md:text-xl mb-5 leading-relaxed`} >
                                Quality products that support better care at every stage of treatment
                            </p>
                            <div className='justify-items-center md:justify-start flex justify-center'>
                                <Link
                                    href="/products"
                                    className={`${inter.className} bg-primary  font-semibold text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors font-sm inline-block`}
                                >
                                    Explore Now
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="flex-1 w-full aspect-video ">
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/Home%20page/Rectangle%202.png"
                                    alt="Medical products"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trusted Healthcare Section */}
                <section className="px-6 md:px-16 lg:px-28 py-12 md:py-16  ">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl/10 md:text-4xl/[3rem] lg:text-5xl/[3.5rem] font-[300] text-gray-900 mb-4 tracking-wide">
                                <span className="block">Trusted by Leading Healthcare</span>
                                <span className="block">Providers</span>
                            </h2>
                            <p className={`${inter.className} text-gray-600 text-sm md:text-base/6 max-w-2xl mx-auto`}>
                                Quality products that support better care at every stage of treatment<br />
                                Quality products that support better care at every stage of
                            </p>
                        </div>

                        {/* Image Grid */}
                        <div className="flex flex-col gap-2">
                            {/* Mobile layout */}
                            <div className="grid grid-cols-[1.2fr_0.8fr] gap-2 sm:gap-3 md:hidden">
                                {/* Top full-width */}
                                <div className="col-span-2 relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/Home%20page/Frame%203.png"
                                        alt="Surgical procedure"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Left tall hero image */}
                                <div className="row-span-3 relative w-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/Home%20page/Frame%205.png"
                                        alt="Medical mask"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right column stacked */}
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/Home%20page/Frame%206.png"
                                        alt="Medical equipment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/Home%20page/Frame%207.png"
                                        alt="Medical professional"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/Home%20page/Frame%208.png"
                                        alt="Laboratory equipment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Desktop / tablet layout */}
                            <div className="hidden md:flex flex-col gap-2">
                                {/* Top Row - 2 Images */}
                                <div className="grid grid-cols-3 gap-2 h-64 md:h-80 lg:h-96">
                                    {/* Large Image - Surgery */}
                                    <div className="col-span-2 relative h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                        <Image
                                            src="/images/Home%20page/Frame%203.png"
                                            alt="Surgical procedure"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Small Image - Medical Equipment */}
                                    <div className="relative h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                        <Image
                                            src="/images/Home%20page/Frame%205.png"
                                            alt="Medical equipment"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Bottom Row - 3 Equal Images */}
                                <div className="grid grid-cols-3 gap-2">
                                    {/* Image 1 - Surgical Instruments */}
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                        <Image
                                            src="/images/Home%20page/Frame%206.png"
                                            alt="Surgical instruments"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Image 2 - Medical Professional */}
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                        <Image
                                            src="/images/Home%20page/Frame%207.png"
                                            alt="Medical professional"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Image 3 - Laboratory */}
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                        <Image
                                            src="/images/Home%20page/Frame%208.png"
                                            alt="Laboratory equipment"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection />
                {/* CTA Banner */}
                <section className="px-6 md:px-16 lg:px-28 py-10 md:py-14">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br
from-[rgba(18,40,18,1)]
via-[rgba(26,53,26,1)]
to-[rgba(35,104,35,1)]
 text-white">
                            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_40%)]" aria-hidden="true" />
                            <div className="flex flex-col-reverse  lg:flex-row items-center justify-between gap-6 lg:gap-10 px-6 md:px-10 lg:px-12 py-4 md:py-4 lg:py-4">
                                {/* Text */}
                                <div className="flex-1 max-w-lg">
                                    <h3 className="text-4xl md:text-5xl lg:text-4xl  tracking-wide leading-tight mb-6">
                                        <span className="block">Schedule Your</span>
                                        <span className="block font-normal">Appointment With us</span>
                                    </h3>
                                    <p className={`${inter.className} text-sm md:text-base font-light text-white leading-relaxed mb-8 tracking-wide`}>
                                        Lorem ipsum dolor sit amet consectetur. At donec mollis nulla amet. Elementum nibh lacus adipiscing integer. Elementum nibh lacus adipiscing
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Link
                                            href="/contact"
                                            className={`${inter.className} inline-flex items-center gap-2 bg-white text-gray-900 font-light text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all`}
                                        >
                                            Make as a Call
                                            <span className="flex items-center justify-center w-5 h-5 p-1 bg-gray-900 text-white rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="flex-1 w-full max-w-lg">
                                    <div className="relative  h-72 md:h-80 lg:h-96">
                                        <Image
                                            src="/images/Home%20page/image%2013.png"
                                            alt="Medical chair"
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterSection />
            </main>
        </div >
    );
};

export default Home;
