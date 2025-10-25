'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    image: string;
    calories: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] scrollbar-hide",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[240px] max-w-full relative rounded-2xl border-2 border-gray-200 flex-shrink-0 bg-white px-4 py-6 md:w-[280px] shadow-lg hover:shadow-xl transition-shadow"
            key={`${item.name}-${idx}`}
          >
            <div className="flex flex-col items-center space-y-3">
              {/* Product Image */}
              <div className="relative w-full h-40 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-3"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-base font-bold text-black text-center leading-tight min-h-[48px] flex items-center">
                {item.name}
              </h3>

              {/* Calories */}
              <p className="text-xs text-gray-600 text-center font-medium">
                Cal.: {item.calories}
              </p>

              {/* Price Info */}
              <div className="text-xs text-gray-500 text-center italic">
                Set location for pricing.
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
