"use client";

import { Menu } from "@/components/menu/Menu";

export default function Header() {
  return (
    <header className="py-4 px-4 shadow-sm w-[100vw] rounded-br-md rounded-bl-md sticky top-0 z-40 bg-bedge  gap-6">
      <div className="flex max-w-[90rem] m-0 m-auto justify-between items-center">
        <span className="uppercase font-jost text-3xl text-black">
          Татьяна Попова
        </span>
        <Menu />
      </div>
    </header>
  );
}
