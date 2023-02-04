import Image from "next/image";
import React, { FC, useState } from "react";
import styles from "@/styles/ImageCard.module.css";
import axios from "axios";

type ImageCardProps = {
  file: any;
  handleFileChange: any;
  handleDrop: any;
};

const ImageCard: FC<ImageCardProps> = ({
  file,
  handleFileChange,
  handleDrop,
}) => {
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className={styles.imgContainer}>
      <h1 className={styles.imgHeader}>Upload your image</h1>
      <p className={styles.imgText}>File should be Jpeg, Png,...</p>
      <div
        className={styles.imgUploadContainer}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {file ? (
          <Image
            src={URL.createObjectURL(file)}
            alt="Uploaded Image"
            width={338}
            height={219}
          />
        ) : (
          <>
            <Image
              src="/images/image.svg"
              alt="image"
              width={100}
              height={100}
            />
            <p>Drag & Drop your image here</p>
          </>
        )}
      </div>
      <p className={styles.orText}>Or</p>
      <label className={styles.imgBtn}>
        Choose a file
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default ImageCard;
