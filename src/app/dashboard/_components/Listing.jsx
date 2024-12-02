"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import EmptyState from "../_components/EmptyState";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl">Heyy, {user?.fullName}</h2>
        <Button>+ Redesign Room</Button>
      </div>
      {userRoomList?.length == 0 ? <EmptyState /> : <div>{/*Lising*/}</div>}
    </div>
  );
}

export default Listing;
