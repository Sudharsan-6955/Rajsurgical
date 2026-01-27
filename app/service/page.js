import Navbar from '@/components/Navbar';
import ComingSoon from '@/components/ComingSoon';
import Heroservice from './Heroservice';
import ServiceCarousel from './ServiceCarousel';
import FeedbackForm from './FeedbackForm';
import FooterSection from '@/components/FooterSection';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Service = () => {
  return (
    <div>
      <Navbar />
      {/* <ComingSoon title="Services" /> */}
      <Heroservice />
      {/* What We Stand For Quality */}
      <section className="">
        <div className="max-w-6xl mx-auto   items-center">
          <div>
            <h2 className="text-3xl  text-center sm:text-4xl lg:text-5xl font-normal leading-[1.2] md:leading-[1.25] lg:leading-[1.1] md:space-y-2">
              <span className='block'>Our Services </span>
            </h2>
          </div>
          <div className={` text-center px-24 md:px-72  text-sm sm:text-sm py-2 md:py-4 text-gray-700 md:leading-normal ${inter.className}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
          </div>
        </div>
      </section>
      <ServiceCarousel />
      <FeedbackForm />
      <FooterSection />

    </div>
  );
};

export default Service;
