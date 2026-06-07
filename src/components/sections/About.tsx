import Image from "next/image";
import { MyButton } from "@/components/ui/my-button";

// icon
import ArrowIcon from "@svg/arrow-right.svg";
import UserIcon from "@svg/user.svg";
import ProjectIcon from "@svg/projects.svg";
import RoundedIcon from "@svg/rounded.svg";
import TrendIcon from "@svg/trend-up.svg";

// type
import type { FC, SVGProps } from "react";

// utils
import { getPath } from "@/utils/path";

type Props = {
  text?: string;
};

export default function About({ text }: Props) {
  type IconType = FC<SVGProps<SVGSVGElement>>;

  const buttons: {
    id: string;
    label: string;
  }[] = [
    {
      id: "cases",
      label: "Смотреть кейсы",
    },
    {
      id: "contact",
      label: "Связаться со мной",
    },
  ];

  const bullets: {
    id: string;
    title: string;
    label: string;
    icon: IconType;
  }[] = [
    {
      id: "users",
      title: "7+",
      label: "лет в digital-маркетинге с фокусом на результат",
      icon: UserIcon,
    },
    {
      id: "projects",
      title: "20+",
      label: "успешных проектов для брендов и компаний",
      icon: ProjectIcon,
    },
    {
      id: "rounded",
      title: "8",
      label: "отраслей опыта",
      icon: RoundedIcon,
    },

    {
      id: "trends",
      title: "300%+",
      label: "средний рост KPI в проектах",
      icon: TrendIcon,
    },
  ];
  return (
    <section id="about" className="mb-[2rem] pt-8 relative scroll-mt-[70px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 rounded-xl w-full lg:h-[650] h-full bg-base">
        <div className="flex flex-col md:pt-16 gap-6 md:pl-14 p-14 pb-0">
          <span className="text-grayText text-md uppercase">маркетолог</span>
          <h1 className="text-4xl font-semibold text-grayText ">
            Создаю маркетинг, который работает на бизнес
          </h1>
          <p className="text-xl text-grayText font-[400]">
            Помогаю брендам выделяться на рынке, привлекать клиентов и достигать
            бизнес-результатов с помощью стратегического маркетинга{" "}
          </p>
          <div className="flex gap-[1rem] pt-8">
            {buttons.map((button, i) => {
              const isPrimary = i === 1;

              return (
                <MyButton
                  key={button.id}
                  targetId={button.id}
                  className={[
                    "cursor-pointer border-bedge text-sm uppercase py-[1.5rem] px-4 hover:bg-black hover:text-white delay-50 duration-300 ease-in-out",
                    isPrimary
                      ? "bg-black text-bedge hover:bg-white hover:text-black delay-50 duration-300 ease-in-out"
                      : "bg-bedge text-black",
                  ].join(" ")}
                >
                  {button.label}

                  {!isPrimary && <ArrowIcon className="size-6" />}
                </MyButton>
              );
            })}
          </div>
        </div>
        <Image
          src={getPath("hero.webp")}
          width={600}
          height={600}
          alt="Главное фото"
          className="w-full h-full md:rounded-br-xl md:rounded-tr-xl rounded-xl object-cover"
        />
      </div>
      <div className="absolute bottom-4 xl:flex justify-between bottom-6 left-[2rem] right-[2rem] rounded-4xl max-w-[100%] 2xl:h-[10rem] bg-gray-50/65 xl:h-[8rem] hidden">
        {bullets.map((bullet, i) => {
          const Icon = bullet.icon;

          return (
            <div
              key={bullet.id}
              className="flex gap-[1rem] items-center justify-center px-[2rem]"
            >
              <Icon className="w-8 h-8 text-grayText" />

              <div>
                <h2 className="text-3xl text-grayText">{bullet.title}</h2>
                <span className="text-[1rem] text-grayText block max-w-[15rem] w-full">
                  {bullet.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
