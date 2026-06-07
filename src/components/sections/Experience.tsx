import Image from "next/image";
import { Work } from "../Work";

// type
import type { FC, SVGProps } from "react";
import { Shootouts } from "@/components/Shootouts";

//components
import { MyButton } from "@/components/ui/my-button";

export function Experience() {
  type IconType = FC<SVGProps<SVGSVGElement>>;

  return (
    <section
      id="experience"
      className="rounded-4xl bg-base grid lg:grid-cols-2 grid-cols-1 gap-[2rem] w-full lg:h-[28rem] h-fit py-[2rem] px-[2rem] mb-[2rem] scroll-mt-[70px]"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-xl text-black max-w-[17rem]">
          Разрабатываю маркетинг «под ключ» — от стратегии до роста
        </h2>
        <div className="">
          <p className="text-md text-gray-600">
            Меня зовут Татьяна Попова, я digital-маркетолог.
          </p>
          <p className="text-md text-gray-600">
            Специализируюсь на стратегическом маркетинге: помогаю бизнесу
            продвигать продукты и обеспечивать стабильный рост.
          </p>
        </div>
        <div className="flex flex-col gap-[2rem] ">
          <Shootouts />
          <div className="flex gap-[2rem] items-center">
            <a href="/download/resume.pdf" download>
              <MyButton className="text-md cursor-pointer bg-transparent border-black hover:text-white hover:bg-black delay-50 px-8 py-6">
                Скачать резюме
              </MyButton>
            </a>
            <span className="inline-block text-md font-semibold">
              PDF, 206 КБ
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <Work />
      </div>
    </section>
  );
}
