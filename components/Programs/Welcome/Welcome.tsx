"use client";
import ProgramConfigs from "@/Utils/Programs/ProgramConfigs";
import ProgramLauncher from "@/Utils/Programs/ProgramLauncher";
import { setWelcomeOpen } from "@/lib/redux/slicers/WelcomeSlicer";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Salsa } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const salsa = Salsa({
  weight: "400",
  subsets: ["latin"],
});

export default function Welcome() {
  const isOpen = useSelector((state: RootState) => state.welcomeIsOpen);
  const dispatch = useDispatch();

  return (
    <ProgramLauncher
      name={ProgramConfigs.Welcome.title}
      isOpen={isOpen}
      dispatch={dispatch}
      slice={setWelcomeOpen}
      size="h-[35rem] w-[45rem]"
    >
      <div className="flex select-text flex-col gap-5 p-5 text-white">
        <span className={`select-none text-5xl font-bold ${salsa.className}`}>
          useOS()
        </span>
        <p>
          Say Hello to the Future of Operating Systems! UseOS is an innovative
          Next.js application that brings the operating system to your
          fingertips. With a user interface reminiscent of the Windows operating
          system, we elevate your computer experience like never before.
        </p>
        <p>
          User-Friendly and Flexible <br />
          With its user-friendly interface and flexible features, UseOS provides
          an experience tailored to your needs. Focus on your tasks while we
          take care of the rest.
        </p>
        <p>
          Get Started Now!
          <br /> Experience UseOS and unlock the full potential of your
          computer. Remember, the operating system of the future is here today!
        </p>
        <Link
          href={`https://www.sametcc.me/use-os`}
          className="select-none font-semibold hover:underline"
          target="_blank"
        >
          Check Out The Source Code
        </Link>
      </div>
    </ProgramLauncher>
  );
}
