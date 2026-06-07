"use client";

import { motion, AnimatePresence } from "framer-motion";

import { ProjectGallery } from "@/components/common/cases/ProjectGallery";
import { CASES } from "@/constants/cases";

type CaseItem = (typeof CASES)[number];

type CasesContentProps = {
  caseItem: CaseItem;
};

export function CasesContent({ caseItem }: CasesContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={caseItem.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="grid gap-8 lg:grid-cols-[640px_1fr] w-full"
      >
        <ProjectGallery
          images={caseItem.gallery}
          title={caseItem.name}
          buttonText="Смотреть кейс"
        />

        <div className="flex flex-col gap-4">
          <span className="text-sm uppercase text-gray-500">Кейс</span>

          <h3 className="text-3xl font-semibold">{caseItem.name}</h3>

          <p className="text-base leading-relaxed text-gray-600">
            {caseItem.label}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
