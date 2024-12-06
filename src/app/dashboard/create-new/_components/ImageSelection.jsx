"use client";
import Image from "next/image";
import React, { useState } from "react";

function ImageSelection({ selectedImage }) {
  const [file, setFile] = useState();
  const onFileSelected = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    selectedImage(event.target.files[0]);
  };
  return (
    <div>
      <label>Select Image of your room</label>
      <div className="mt-4">
        <label htmlFor="upload-image">
          <div
            className={`p-28 border rounded-xl flex justify-center items-center border-dotted bg-slate-200 border-primary cursor-pointer hover:shadow-lg ${
              file && "p-0 bg-white "
            }`}
          >
            {!file ? (
              <Image
                src="/image.png"
                width={70}
                height={70}
                alt="upload image"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={300}
                height={300}
                alt="upload image"
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
}

export default ImageSelection;
