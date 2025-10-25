'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
  enableScroll = false,
}: {
  items: {
    title: string;
    description?: string;
    link?: string;
    icon?: string;
    image?: string;
  }[];
  className?: string;
  enableScroll?: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        enableScroll 
          ? "flex gap-4 overflow-x-auto scrollbar-hide py-10 snap-x snap-mandatory" 
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link || "#"}
          key={item?.link}
          className={cn(
            "relative group block p-2 h-full",
            enableScroll ? "flex-none w-64 snap-start" : "w-full"
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl"
                style={{ backgroundColor: '#E4002B' }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col items-center justify-center space-y-3 p-4">
              {/* Icon/Image Container */}
              <div className="relative w-24 h-24 flex items-center justify-center overflow-hidden rounded-xl">
                {item.icon && (
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              
              {/* Title */}
              <CardTitle>{item.title}</CardTitle>
              
              {/* Description if provided */}
              {item.description && (
                <CardDescription>{item.description}</CardDescription>
              )}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white border border-transparent group-hover:border-[#E4002B] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide text-center transition-colors duration-200", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-600 tracking-wide leading-relaxed text-sm text-center",
        className
      )}
    >
      {children}
    </p>
  );
};
