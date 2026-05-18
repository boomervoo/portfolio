"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  targetId?: string;
  onClick?: () => void;
};

export function MyButton({ children, targetId, className, onClick }: Props) {
  const handleScroll = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    onClick?.();
  };

  return (
    <Button onClick={handleScroll} className={className} variant="outline">
      {children}
    </Button>
  );
}
