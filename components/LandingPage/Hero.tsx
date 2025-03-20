import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full py-16">
      {" "}
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Land Your Dream Job with AI-Powered Career Coaching
          </h1>
          <p className="mx-auto max-w-[600px] md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            ai powered tools for job success
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href={"/dashboard"}>
            <Button size={"lg"}>Get Started</Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button size={"lg"} variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="mt-5">
          <div className="">
            <Image
              src={"/preview.png"}
              width={980}
              height={720}
              alt="app demo"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
