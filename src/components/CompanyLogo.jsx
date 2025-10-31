import { useEffect, useRef, useState } from 'react';
import slack from '../assets/slack.png';
import amazon from '../assets/amazon.png';
import woocommerce from '../assets/woocommerce.png';
import meundies from '../assets/meundies.png';
import sitepoint from '../assets/sitepoint.png';

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    //  Detect when section is visible on screen
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(scrollContainer);

    let scrollPosition = scrollContainer.scrollWidth / 2; // start mid-way for reverse scroll
    const speed = 0.6; // adjust speed here

    const scroll = () => {
      if (isVisible) {
        scrollPosition -= speed;
        if (scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth / 2;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="w-full container mx-auto py-20 px-6 flex flex-col sm:flex-row sm:items-center gap-10 overflow-hidden">
      {/* Left Section */}
      <div className="w-full sm:w-[300px] shrink-0 px-6 py-4 text-gray-700 border-l-4 border-blue-500 bg-white  font-semibold text-lg sm:text-base">
        Proud partner at <br /> Hubspot & Segment
      </div>

      {/* Scrolling Logos */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden whitespace-nowrap flex-1"
      >
        {/* Original Logos */}
        <div className="flex shrink-0">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company logo"
              className="mx-12 h-10 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>

        {/* Duplicate Logos for Infinite Scroll */}
        <div className="flex shrink-0">
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo}
              alt="Company logo duplicate"
              className="mx-12 h-10 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;
