"use client";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type GalleryImage = {
  id: number | string;
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
  title?: string;
  buttonText?: string;
};

export function ProjectGallery({
  images,
  title,
  buttonText,
}: ProjectGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-[640px]">
      <div className="relative overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation, Thumbs]}
          slidesPerView={1}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-[420px] w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {title && (
                  <div className="absolute bottom-10 left-6 max-w-[260px]">
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {title}
                    </h3>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute right-5 top-5 z-10 rounded-full bg-black/40 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
      <div className="relative mt-4 px-9">
        <button
          type="button"
          className="gallery-prev absolute left-0 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:bg-black hover:text-white"
        >
          ←
        </button>

        <Swiper
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode
          watchSlidesProgress
          className="gallery-thumbs"
          breakpoints={{
            320: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <button
                type="button"
                className="relative h-[76px] w-full overflow-hidden rounded-xl border-2 border-transparent transition cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="gallery-next absolute right-0 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:bg-black hover:text-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
