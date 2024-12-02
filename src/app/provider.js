"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    user && verifyUser();
  }, [user]);
  // ** verify user */
  const verifyUser = async () => {
    try {
      const dataResult = await axios.post("/api/verify-user", { user });
      console.log(dataResult.data); // Do something with the result here
      setUserDetail(dataResult.data.result);
    } catch (error) {
      console.error("Error verifying user:", error);
      // Optionally, display an error message to the user or handle it as needed
    }
  };
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>;
    </UserDetailContext.Provider>
  );
}

export default Provider;
