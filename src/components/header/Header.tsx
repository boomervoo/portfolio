"use client";

import { MyButton } from "@/components/ui/my-button";

export default function Header() {
  const headerMenu = [
    {
      id: "about",
      label: "Обо мне",
    },
    {
      id: "experience",
      label: "Опыт",
    },
    {
      id: "cases",
      label: "Кейсы",
    },
    {
      id: "keys",
      label: "Контакты",
    },
  ];
  return (
    <header className="py-4 px-4 shadow-sm w-[100vw] rounded-br-md rounded-bl-md sticky top-0 z-40 bg-bedge  gap-6">
      <div className="flex max-w-[90rem] m-0 m-auto justify-between items-center">
        <span className="uppercase font-jost text-3xl text-black">
          Татьяна Попова
        </span>
        <div className="flex items-center gap-4">
          {headerMenu.map((item, index) => (
            <MyButton
              className="cursor-pointer border-gray-500 text-sm bg-bedge uppercase py-2 px-4 hover:bg-black hover:text-white delay-50 duration-300 ease-in-out"
              key={item.id}
              targetId={item.id}
            >
              {item.label}
            </MyButton>
          ))}
        </div>
      </div>
    </header>
  );
}
