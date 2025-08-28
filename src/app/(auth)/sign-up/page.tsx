"use client";

import { SignUp } from "~/components/sign-up";

export default function Page() {

  return (
    <div className="h-screen w-full">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex h-full w-full flex-col items-center justify-center md:py-10">
        <div className="md:w-[400px]">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
