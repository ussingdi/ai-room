"use client";
import React from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalRequirement from "./_components/AdditionalRequirement";
import { Button } from "@/components/ui/button";
import { useState } from "react";
function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    console.log(formData);
  };
  return (
    <div>
      <h2 className="font-bold text-center text-4xl text-primary">
        Experience the Magic of AI Remodeling
      </h2>
      <p className="text-center pt-3">
        Transform any room with a click. Select a space, choose style, and watch
        as AI Instantly reimagines your environment
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-10">
        {/** Image Selection */}
        <ImageSelection
          selectedImage={(value) => {
            onHandleInputChange(value, "image");
          }}
        />
        {/* Form Input Selection */}
        <div>
          {/** Room Type */}
          <RoomType
            selectedRoomType={(value) => {
              onHandleInputChange(value, "roomType");
            }}
          />
          {/** Design Type */}
          <DesignType
            selectedDesignType={(value) => {
              onHandleInputChange(value, "designType");
            }}
          />
          {/**Additional Requirement Text Area )Optiona */}
          <AdditionalRequirement
            additionalRequirementInput={(value) => {
              onHandleInputChange(value, "additionalRequirement");
            }}
          />
          {/*Button Generate Image*/}
          <Button className="w-full mt-6">Generate</Button>
          <p className="text-sm text-gray-400 mt-1 mb-20">
            Important Note:- 1 Credit will be used to Generate
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
