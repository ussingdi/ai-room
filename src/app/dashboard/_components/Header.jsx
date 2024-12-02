"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/clerk-react";
import Image from "next/image";
import React, { useContext } from "react";

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Image src={"/logo.svg"} width={40} height={40} alt={"Logo Image"} />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>
      <Button variant="ghost" className="rounded-full text-primary">
        Buy More Credits
      </Button>
      <div className="flex gap-7 items-center">
        <div className="flex gap-2 p-1 bg-slate-200 px-3 rounded-full items-center">
          <Image
            src={"/star.png"}
            width={25}
            height={25}
            alt={"credit image"}
          />
          <h2>{userDetail?.credits}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
