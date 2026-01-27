'use client';

import { useEffect, useRef, useState } from 'react';

const SERVICE_ITEMS = [
    { id: 1, name: 'Robert Fox', role: 'Interaction Designer', img: 'https://picsum.photos/seed/bird1/400/500' },
    { id: 2, name: 'Jacob Jones', role: 'Visual Designer', img: 'https://picsum.photos/seed/bird2/400/500' },
    { id: 3, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/bird3/400/500' },
    { id: 4, name: 'Alex John', role: 'Frontend Dev', img: 'https://picsum.photos/seed/bird4/400/500' },
    { id: 5, name: 'Alex John', role: 'Frontend Dev', img: 'https://picsum.photos/seed/bird5/400/500' },
    { id: 6, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/bird6/400/500' },
    { id: 7, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/bird7/400/500' },
    { id: 8, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/bird8/400/500' },
    { id: 9, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/bird9/400/500' },
    { id: 10, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/bird10/400/500' },
    { id: 11, name: 'Jane Cooper', role: 'UI Developer', img: 'https://picsum.photos/seed/bird11/400/500' },


];

export default function ServiceCarousel() {
    const containerRef = useRef(null);
    const isAutoScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);

    const CARDS_PER_BATCH = 5;
    const hasMoreToShow = visibleCount < SERVICE_ITEMS.length;

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

    const handleShowMore = () => {
        const newCount = Math.min(visibleCount + CARDS_PER_BATCH, SERVICE_ITEMS.length);
        setVisibleCount(newCount);
        setTimeout(() => {
            centerCard(visibleCount, true);
        }, 100);
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
                    {SERVICE_ITEMS.slice(0, visibleCount).map((item, index) => (
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

                    {hasMoreToShow && (
                        <div className="snap-center shrink-0 w-72 transition-all duration-300">
                            <button
                                onClick={handleShowMore}
                                className="relative h-72 w-full border-2 border-dashed border-gray-400 rounded-2xl overflow-hidden hover:border-black hover:bg-gray-50 transition-all flex flex-col items-center justify-center gap-4"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span className="text-lg font-semibold text-gray-700">Show More</span>
                                <span className="text-sm text-gray-500">{SERVICE_ITEMS.length - visibleCount} more</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* ===== PAGINATION ===== */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {SERVICE_ITEMS.slice(0, visibleCount).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => centerCard(index)}
                        className={`rounded-full transition-all
              ${visibleCount > 5 
                ? `w-2 h-2 ${activeIndex === index ? 'bg-black' : 'bg-gray-300'}`
                : `h-1 ${activeIndex === index ? 'w-10 bg-black' : 'w-4 bg-gray-300'}`
              }`}
                    />
                ))}
                {hasMoreToShow && (
                    <div className={visibleCount > 5 ? 'w-2 h-2 rounded-full bg-gray-300' : 'h-1 w-4 rounded-full bg-gray-300'} />
                )}
            </div>

        </div>
    );
}
