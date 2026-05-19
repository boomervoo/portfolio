"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  onClose: () => void;
};

export function ModalCase({ onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[700px] rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold text-red-500">Модалка TEST</h2>

        <p className="mt-4">Контент модалки</p>
      </div>
    </div>,
    document.body,
  );
}
