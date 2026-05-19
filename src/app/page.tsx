import Header from "@/components/header/Header";
import About from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Cases } from "@/components/sections/Cases";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-bedge font-sans ">
      <Header />
      <main className="flex flex-1 w-full max-w-[100rem] flex-col items-center justify-between pb-16 px-16 bg-bedge sm:items-start">
        <About />
        <Experience />
        <Cases />
      </main>
    </div>
  );
}
