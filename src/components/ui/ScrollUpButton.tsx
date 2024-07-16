"use client";

import { ChevronUp } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface ScrollUpButtonProps {}

const ScrollUpButton: FC<ScrollUpButtonProps> = ({}) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled below the hero section (100vh)
      const isBelowHero = window.scrollY > window.innerHeight;

      // Update the visibility state
      setIsVisible(isBelowHero);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top items-center justify-center ${
        isVisible ? "flex" : "hidden"
      }`}
    >
      <ChevronUp size={28} />
    </button>
  );
};

export default ScrollUpButton;
