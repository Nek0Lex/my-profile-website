import NavBar from "@/components/NavBar";
import Image from "next/image";
import profileIcon from "../public/1559I.jpg";
import nextJspPic from "../public/nextjs.png";
import tailwindpPic from "../public/tailwind.png";
import BuildWith from "@/components/BuildWith";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <NavBar />
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="flex flex-col items-center max-w-full lg:w-1/2 lg:h-full lg:h-screen lg:justify-center">
            <img
              src={profileIcon.src}
              alt="..."
              className="shadow rounded-full border-none w-2/5 lg:w-2/5 mb-2"
            />
            <p className="text-center">Alex Wong</p>
          </div>

          <div className="m-5" />
          <div className="lg:w-1/2 lg:flex flex-col mx-8 lg:justify-center lg:ml-14">
            <h1 className="text-center text-xl mb-5 lg:text-left">Hello There!👋</h1>
            <p className="mb-5">
              I am a seasoned Development Engineer with 4+ years of software
              engineering, mobile development, backend technology experience.
              Recognized for demonstrating a natural aptitude for applying
              research and development strategies, as well as for establishing
              successful software engineering.
            </p>
            <BuildWith />
          </div>
        </div>
      </main>
    </>
  );
}
