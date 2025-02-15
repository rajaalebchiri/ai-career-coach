import { SignIn } from "@clerk/nextjs";
import React from "react";


const page = () => {
  return (
    <div className="container flex justify-center text-center mt-10">
      <SignIn />
    </div>
  );
};

export default page;
