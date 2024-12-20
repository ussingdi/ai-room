import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EmptyState() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/room_image.webp"}
          width={300}
          height={300}
          alt="room-image"
        />
        <h2 className="font-medium text-xl text-gray-600">
          Create new AI Interior Design for your room
        </h2>
        <Link href={"/dashboard/create-new"}>
          <Button className="mt-6">+ Redesign Room</Button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyState;
