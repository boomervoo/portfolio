// icon
import ArrowIcon from "@/../public/svg/projects/arrow-up.svg";
import DevelopmentIcon from "@/../public/svg/projects/development.svg";
import EmailIcon from "@/../public/svg/projects/email.svg";
import PeopleIcon from "@/../public/svg/projects/people.svg";
import SpinIcon from "@/../public/svg/projects/spin.svg";
import StrategyIcon from "@/../public/svg/projects/strategy.svg";

import type { FC, SVGProps } from "react";

export function Shootouts() {
  type IconType = FC<SVGProps<SVGSVGElement>>;

  const bullets: {
    id: number;
    label: string;
    icon: IconType;
  }[] = [
    {
      id: 2,
      label: "Digital-реклама",
      icon: ArrowIcon,
    },
    {
      id: 3,
      label: "Growth-маркетинг",
      icon: DevelopmentIcon,
    },
    {
      id: 4,
      label: "Сквозная аналитика",
      icon: PeopleIcon,
    },
    {
      id: 5,
      label: "Воронки продаж",
      icon: EmailIcon,
    },
    {
      id: 6,
      label: "Influence-маркетинг",
      icon: SpinIcon,
    },
    {
      id: 7,
      label: "Email-автоматизация",
      icon: StrategyIcon,
    },
  ];

  return (
    <ul className="flex gap-4 flex-wrap">
      {bullets.map((bullet, i) => {
        const Icon = bullet.icon;
        return (
          <li
            key={bullet.id}
            className="flex gap-2 items-center w-[calc((100%_-_2rem)_/_2)]"
          >
            <Icon className="shrink-0 w-4 h-4 block" />
            <span className="font-500 text-sm text-gray-600">
              {bullet.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
