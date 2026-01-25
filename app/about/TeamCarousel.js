'use client';

import { useEffect, useRef, useState } from 'react';

const TEAM_ITEMS = [
    { id: 1, name: 'Robert Fox', role: 'Interaction Designer', img: 'https://picsum.photos/seed/a/400/500' },
    { id: 2, name: 'Jacob Jones', role: 'Visual Designer', img: 'https://picsum.photos/seed/b/400/500' },
    { id: 3, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/c/400/500' },
    { id: 4, name: 'Alex John', role: 'Frontend Dev', img: 'https://picsum.photos/seed/d/400/500' },
    { id: 5, name: 'Alex John', role: 'Frontend Dev', img: 'https://picsum.photos/seed/e/400/500' },
    { id: 3, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/g/400/500' },

];

export default function TeamCarousel() {
    const containerRef = useRef(null);
    const isAutoScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    //  INITIAL POSITION
    useEffect(() => {
        centerCard(0, false);
    }, []);


    const getCardCenterPosition = (card, container) => {
        return card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
    };

    const centerCard = (index, smooth = true) => {
        const container = containerRef.current;
        const card = container?.children[index];
        if (!container || !card) return;

        isAutoScrolling.current = true;

        container.scrollTo({
            left: getCardCenterPosition(card, container),
            behavior: smooth ? 'smooth' : 'auto',
        });

        setActiveIndex(index);
        unlockScrollAfterAnimation(smooth);
    };

    const unlockScrollAfterAnimation = (smooth) => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            isAutoScrolling.current = false;
        }, smooth ? 600 : 100);
    };


    //  NAVIGATION


    const goNext = () => {
        if (activeIndex < TEAM_ITEMS.length - 1) {
            centerCard(activeIndex + 1);
        }
    };

    const goPrev = () => {
        if (activeIndex > 0) {
            centerCard(activeIndex - 1);
        }
    };


    //  SCROLL PANNA


    const handleScroll = () => {
        if (isAutoScrolling.current) return;

        const container = containerRef.current;
        if (!container) return;

        const containerCenter = container.scrollLeft + container.offsetWidth / 2;

        let closest = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(containerCenter - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closest = index;
            }
        });

        setActiveIndex(closest);
    };


    return (
        <div className="relative max-w-6xl mx-auto pb-24">

            {/* ===== CAROUSEL ===== */}
            <div className="relative  ">
                {/* Left Fade Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />

                {/* Right Fade Shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-24 md:bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

                <div
                    ref={containerRef}
                    onScroll={handleScroll}
                    className="flex gap-6  overflow-x-auto snap-x snap-mandatory px-4 pt-6 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {TEAM_ITEMS.map((item, index) => (
                        <div
                            key={item.id}
                            className={`snap-center  shrink-0 w-72 transition-all duration-300
              ${index === activeIndex
                                    ? 'translate-y-[-6px] scale-[1.02]'
                                    : 'opacity-80'
                                }`}
                        >
                            <div className="relative h-72  border-2 border-black border- rounded-2xl overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute left-3 right-3 bottom-3 bg-white rounded-xl p-3 shadow">
                                    <h3 className="text-sm font-semibold">{item.name}</h3>
                                    <p className="text-xs text-gray-600">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== PAGINATION ===== */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {TEAM_ITEMS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => centerCard(index)}
                        className={`h-1  rounded-full transition-all
              ${activeIndex === index ? 'w-10 bg-black' : 'w-4 bg-gray-300'}`}
                    />
                ))}
            </div>

            {/* ===== ARROWS ===== */}
            <div className="hidden md:flex absolute bottom-4 right-6 gap-3">
                <button
                    onClick={goPrev}
                    disabled={activeIndex === 0}
                    className="w-10 h-10 rounded-full border border-gray-800 disabled:opacity-30 disabled:cursor-not-allowed disabled:border-gray-300 hover:bg-gray-100 transition-all flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={goNext}
                    disabled={activeIndex === TEAM_ITEMS.length - 1}
                    className="w-10 h-10 rounded-full border border-gray-800 disabled:opacity-30 disabled:cursor-not-allowed disabled:border-gray-300 hover:bg-gray-100 transition-all flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

        </div>
    );
}
