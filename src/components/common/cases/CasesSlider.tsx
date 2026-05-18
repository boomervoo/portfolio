import { BaseSwiper } from "@/components/common/BaseSwiper";
import { CASES } from "@/constants/cases";
import { motion } from "framer-motion";

type CasesSliderProps = {
  activeCaseId: number;
  onCaseClick: (id: number) => void;
};

export function CasesSlider({ activeCaseId, onCaseClick }: CasesSliderProps) {
  return (
    <BaseSwiper
      items={CASES}
      getKey={(item) => item.id}
      className="max-w-[1480px] w-full mb-8"
      showPagination={false}
      prevButtonClassName="left-[-25] h-12 w-12 text-lg"
      nextButtonClassName="right-[-25] h-12 w-12 text-lg"
      options={{
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 3,
          },
        },
      }}
      renderSlide={(item) => {
        const isActive = activeCaseId === item.id;

        return (
          <motion.button
            type="button"
            onClick={() => onCaseClick(item.id)}
            className="w-full cursor-pointer text-left rounded-xl p-1"
            animate={{
              opacity: isActive ? 1 : 0.6,
              scale: isActive ? 1.01 : 1,
            }}
            whileHover={{
              opacity: 1,
              scale: 1.01,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <motion.article
              className="flex w-full flex-col gap-6 rounded-2xl p-3"
              animate={{
                backgroundColor: isActive ? "#282b30" : "#f6f3f1",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={item.img}
                  alt={item.spec}
                  className="h-[260px] w-full rounded-xl object-cover"
                  animate={{
                    scale: isActive ? 1.03 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                />
              </div>

              <div>
                <motion.h3
                  className="mb-4 text-xl font-semibold"
                  animate={{
                    color: isActive ? "#ffffff" : "#000000",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {item.name}
                </motion.h3>

                <motion.p
                  className="text-sm leading-relaxed"
                  animate={{
                    color: isActive ? "rgba(255,255,255,0.75)" : "#4b5563",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {item.label}
                </motion.p>
              </div>
            </motion.article>
          </motion.button>
        );
      }}
    />
  );
}
