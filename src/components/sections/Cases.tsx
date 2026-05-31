"use client";

import { useState } from "react";

import { CASES } from "@/constants/cases";
import { MyButton } from "@/components/ui/my-button";
import { ModalCase } from "@/components/modal/ModalCase";
import { CasesSlider } from "@/components/common/cases/CasesSlider";
import { CasesContent } from "@/components/common/cases/CasesContent";

export function Cases() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCaseId, setActiveCaseId] = useState(CASES[0].id);

  const activeCase = CASES.find((item) => item.id === activeCaseId) ?? CASES[0];

  return (
    <section id="cases" className="pb-[2rem] rounded-xl">
      <h2 className="uppercase text-2xl pl-[2rem] font-semibold mb-4">Мои Кейсы</h2>
      <CasesSlider className="max-w-[85rem] mb-10" activeCaseId={activeCaseId} onCaseClick={setActiveCaseId} />
      <CasesContent caseItem={activeCase} />
      <MyButton targetId="cases" onClick={() => setIsOpen(true)}>
        Открыть модалку
      </MyButton>
      {isOpen && <ModalCase onClose={() => setIsOpen(false)} />}
    </section>
  );
}
