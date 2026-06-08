"use client";
import { getPath } from "@/utils/path";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// icon
import TelegramIcon from "@svg/telegram.svg";
import LinkedinIcon from "@svg/linkedin.svg";
import CopiedIcon from "@svg/copy.svg";

export function Contact() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const telegramName = "@tatianapopova";
  const linkedinName = "tatianaLavs";

  async function handleCopy(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(link);

      setTimeout(() => {
        setCopiedLink(null);
      }, 3000);
    } catch (error) {
      console.warn(error, "Contact/ошибка копирования текста");
    }
  }

  return (
    <div
      id="contact"
      className="flex justify-between bg-base p-[2rem] rounded-xl w-full gap-6 scroll-mt-[70px]"
    >
      <div className="flex flex-col gap-4">
        <h2 className="uppercase text-2xl font-semibold mb-4">
          ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ
        </h2>
        <p className="text-md text-gray-600 max-w-[40rem]">
          Готова помочь вашему бизнесу с помощью современных маркетинговых
          решений. Напиши мне и мы обсудим проект!
        </p>
        <motion.div
          whileHover={{ opacity: 0.5 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onClick={() => handleCopy(telegramName)}
          className="flex gap-2 mt-10 items-center cursor-pointer w-max"
        >
          <TelegramIcon className="size-8 text-black" />
          <span className="text-md font-medium text-black">{telegramName}</span>
          <CopiedIcon className="size-4 text-black" />

          <AnimatePresence>
            {copiedLink === telegramName && (
              <motion.span
                className="text-md font-medium text-black"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.25 }}
              >
                Скопировано
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          whileHover={{ opacity: 0.5 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onClick={() => handleCopy(linkedinName)}
          className="flex gap-2 items-center cursor-pointer w-max"
        >
          <LinkedinIcon className="size-8 text-black" />
          <span className="text-md font-medium text-black">{linkedinName}</span>
          <CopiedIcon className="size-4 text-black" />

          <AnimatePresence>
            {copiedLink === linkedinName && (
              <motion.span
                className="text-md font-medium text-black"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.25 }}
              >
                Скопировано
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="lg:w-1/2 sm:w-[26rem] lg:flex hidden">
        <Image
          src={getPath("hero.webp")}
          alt="Contact"
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
