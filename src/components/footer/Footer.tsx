"use client";

import { navigation, services, socials } from "@/constants/footer";

export function Footer() {
  function handleScroll(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <footer className="mt-[2rem] pb-[2rem]">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 px-[2rem] py-[2rem]">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-md font-semibold uppercase text-black">
              Татьяна Попова
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Маркетинг · Дизайн · Стратегия
            </p>
          </div>

          <span className="text-sm text-gray-500">
            © 2024 Татьяна Попова. Все права защищены.
          </span>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase text-black">
            Навигация
          </h3>

          <ul className="flex flex-col gap-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScroll(item.id)}
                  className="text-sm text-gray-500 transition-colors hover:text-black cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase text-black">
            Услуги
          </h3>

          <ul className="flex flex-col gap-2">
            {services.map((item) => (
              <li key={item.id}>
                <span className="text-sm text-gray-500">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase text-black">
            Социальные сети
          </h3>

          <ul className="flex flex-col gap-2">
            {socials.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-gray-500 transition-colors hover:text-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
