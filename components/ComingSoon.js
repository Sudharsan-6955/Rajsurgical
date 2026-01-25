import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const ComingSoon = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt20">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Image
            src="/images/construction.png"
            alt="Coming Soon"
            width={300}
            height={300}
            priority
            className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 ">
          {title || 'Coming Soon'}
        </h1>
        <p className={`${inter.className} px-2 text-sm text-gray-600 mt-4 `}>
          We're working hard to bring you something amazing
        </p>
        
      </div>
    </div>
  );
};

export default ComingSoon;
