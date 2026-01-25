import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const FooterSection = () => {
    return (
        <footer className="bg-white">
            {/* CTA Banner */}
            
            {/* Footer Links */}
            <section className="relative px-1 md:px-16 lg:px-28 pb-16 md:pb-20  ">
                <div className="relative max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:[grid-template-columns:1.9fr_1fr_1fr_1fr] gap-6 md:gap-12 lg:gap-16 items-start">
                    {/* Brand */}
                    <div className="space-y-4 col-span-3 md:col-span-1 mx-8">
                        <div className="flex items-center gap-3">
                            <div className="relative w-48 h-14">
                                <Image
                                    src="/images/Logo.png"
                                    alt="Raj Surgical logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        <p className={`${inter.className} text-sm text-gray-600 leading-relaxed max-w-xl`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse ultricies nibh in lacus sollicitudin viverra eget pharetra nibh.
                        </p>
                        <div className="flex items-center gap-3 text-gray-500">
                            {/* WhatsApp */}
                            <Link href="#" aria-label="WhatsApp" className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center hover:text-emerald-700 hover:border-emerald-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.04 2.5c-5.27 0-9.54 4.22-9.54 9.42 0 1.66.45 3.22 1.24 4.57L2.5 21.5l5.17-1.67a9.6 9.6 0 0 0 4.37 1.06c5.27 0 9.54-4.22 9.54-9.42 0-5.2-4.27-9.42-9.54-9.42Zm0 1.6c4.34 0 7.86 3.45 7.86 7.72 0 4.27-3.52 7.72-7.86 7.72-1.42 0-2.77-.37-3.95-1.08l-.28-.17-3.06.98.98-2.92-.18-.3a7.58 7.58 0 0 1-1.2-4.23c0-4.27 3.52-7.72 7.86-7.72Zm-3.18 3.33-.51.03c-.16.01-.41.06-.63.27-.22.2-.83.81-.83 1.98 0 1.17.85 2.3.97 2.46.12.16 1.63 2.59 4.02 3.52.56.22 1 .35 1.35.45.57.18 1.08.15 1.48.09.45-.07 1.38-.56 1.58-1.1.2-.53.2-.99.14-1.09-.06-.1-.22-.16-.47-.28-.25-.12-1.48-.72-1.71-.8-.23-.08-.4-.12-.57.12-.17.24-.66.8-.81.97-.15.17-.3.18-.55.06-.25-.12-1.07-.39-2.05-1.24-.76-.66-1.27-1.48-1.42-1.73-.15-.25-.02-.38.1-.5.1-.1.25-.27.37-.4.12-.13.16-.23.24-.4.08-.17.04-.32-.02-.45-.06-.12-.57-1.38-.78-1.89-.2-.51-.41-.44-.57-.45Z" /></svg>
                            </Link>
                            {/* Instagram */}
                            <Link href="#" aria-label="Instagram" className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center hover:text-emerald-700 hover:border-emerald-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 2.75A4.25 4.25 0 1 1 7.75 12 4.25 4.25 0 0 1 12 7.75Zm0 2A2.25 2.25 0 1 0 14.25 12 2.25 2.25 0 0 0 12 9.75Zm4.75-3a.75.75 0 1 1-.75.75c0-.42.34-.75.75-.75Z" /></svg>
                            </Link>
                            {/* Twitter/X */}
                            <Link href="#" aria-label="Twitter" className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center hover:text-emerald-700 hover:border-emerald-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M4.5 4h3.36l3.06 3.98L13.86 4H19l-5.03 6.66L19.5 20h-3.36l-3.3-4.3L9.14 20H4l5.24-6.93L4.5 4Zm3.05 1.5H6.8l8.7 11.04h.76l-8.7-11.04Z" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-4 md:pt-4 mx-8">
                        <h4 className={`${inter.className} text-base font-semibold text-gray-900`}>Company</h4>
                        <div className={`${inter.className} space-y-5 text-xs text-gray-600 flex flex-col`}>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">About</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Features</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Works</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Career</Link>
                        </div>
                    </div>

                    {/* Help */}
                    <div className="space-y-3 md:pt-4">
                        <h4 className={`${inter.className} text-base font-semibold text-gray-900`}>Help</h4>
                        <div className={`${inter.className} space-y-5  text-xs text-gray-600 flex flex-col`}>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Customer Support</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Delivery Details</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Terms &amp; Conditions</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="space-y-3 md:pt-4">
                        <h4 className={`${inter.className} text-base font-semibold text-gray-900`}>Resources</h4>
                        <div className={`${inter.className} space-y-5  text-xs text-gray-600 flex flex-col`}>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Free eBooks</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Development Tutorial</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">How to - Blog</Link>
                            <Link href="#" className="hover:text-emerald-700 transition-colors">Youtube Playlist</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom wordmark */}
                <div className="mt-8 flex justify-center">
                    <p className="text-4xl md:text-5xl lg:text-9xl font-semibold text-gray-200 leading-none select-none">Let’s Connect</p>
                </div>
            </section>
        </footer>
    );
};

export default FooterSection;
