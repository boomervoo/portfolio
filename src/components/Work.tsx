"use client";

// const
import { WORK, PROJECTS, TABS } from "@/constants/work";

// components
import { MyButton } from "@/components/ui/my-button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TypeId = (typeof TABS)[number]["id"];

export function Work() {
  const [activeTab, setActiveTab] = useState<TypeId>("work");

  const currentItems = activeTab === "work" ? WORK : PROJECTS;

  return (
    <div className="flex gap-4">
      {/*<div className="relative w-[40px] h-full">*/}
      {/*  <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-300" />*/}

      {/*  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gray-300 bg-white" />*/}

      {/*  <div className="absolute top-[215px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gray-300 bg-white" />*/}
      {/*  <div className="absolute top-[435px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black border-2 border-black" />*/}

      {/*  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gray-300 bg-white" />*/}
      {/*</div>*/}
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <MyButton
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer ${isActive ? "bg-black text-white" : ""}`}
              >
                {tab.label}
              </MyButton>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-auto max-h-[27rem] pr-[2rem] flex flex-col gap-6"
          >
            {currentItems.map((exp, i) => {
              const isLast = i === currentItems.length - 1;

              return (
                <div className="flex flex-col gap-2" key={i}>
                  <span className="block text-sm text-gray-500">
                    {exp.period}
                  </span>
                  <span className="text-xl font-semibold">{exp.title}</span>
                  <p className="text-md text-gray-600">{exp.description}</p>
                  <ul className="flex mb-4 gap-4 justify-between select-none">
                    {exp.tags.map((item, i) => {
                      return (
                        <li className="text-sm font-semibold" key={i}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  {!isLast && (
                    <div
                      key={i}
                      className="border-b border-1 ml-4 mr-4 border-black opacity-[.20] last:border-b-0"
                    ></div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
