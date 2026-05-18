"use client";

import { useRef, useState, type ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";
import type { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";

type BaseSwiperProps<T> = {
  items: T[];
  renderSlide: (item: T, index: number) => ReactNode;
  getKey?: (item: T, index: number) => string | number;
  className?: string;
  slideClassName?: string;
  options?: SwiperOptions;
  showNavigation?: boolean;
  showPagination?: boolean;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
};

export function BaseSwiper<T>({
  items,
  renderSlide,
  getKey,
  className,
  slideClassName,
  options,
  showNavigation = true,
  showPagination = true,
  prevButtonClassName = "",
  nextButtonClassName = "",
}: BaseSwiperProps<T>) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={showPagination ? { clickable: true } : false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavigationState(swiper);
        }}
        onSlideChange={updateNavigationState}
        onResize={updateNavigationState}
        className={className}
        {...options}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide
              key={getKey ? getKey(item, index) : index}
              className={slideClassName}
            >
              {renderSlide(item, index)}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {showNavigation && (
        <>
          <button
            type="button"
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-black text-white shadow-md transition cursor-pointer hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-30 ${prevButtonClassName}`}
          >
            ←
          </button>

          <button
            type="button"
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-black text-white shadow-md transition cursor-pointer hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-30 ${nextButtonClassName}`}
          >
            →
          </button>
        </>
      )}
    </div>
  );
}
