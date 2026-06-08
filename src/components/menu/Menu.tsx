"use client";

import { useState } from "react";
import Link from "next/link";
import { MyButton } from "@/components/ui/my-button";
import { headerMenu } from "@/constants/menu";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* desktop / tablet */}
      <div className="lg:flex items-center gap-4 hidden">
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

      {/* burger */}
      <button
        type="button"
        onClick={toggleMenu}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        aria-label="Открыть меню"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-6 bg-black transition ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/*  mobile*/}
      <div
        className={` absolute top-[3.5rem] right-0 w-[10rem] overflow-hidden bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-4 py-5">
          {headerMenu.map((item, index) => (
            <MyButton className="border-none" key={item.id} targetId={item.id}>
              {item.label}
            </MyButton>
          ))}
        </nav>
      </div>
    </div>
  );
}
