import Image from "next/image";
import React, { FC } from "react";
import styles from "@/styles/Uploaded.module.css";

type UploadedProps = {
  data: any;
};

const Uploaded: FC<UploadedProps> = ({ data }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const shortenedUrl =
    data?.url.length > 60 ? data.url.substring(0, 60) + "..." : data.url;

  return (
    <div className={styles.uploadContainer}>
      <Image
        src="/images/success.svg"
        alt="uploaded"
        className={styles.succesImg}
        width={35}
        height={35}
      />
      <p>Uploaded Successfully!</p>
      <Image
        src={data ? data?.url : "/images/image.svg"}
        alt="arrow"
        className={styles.imgPlaceholder}
        width={338}
        height={224}
      />

      <div className={styles.uploadedFooter}>
        <p>{shortenedUrl}</p>
        <button onClick={() => copyToClipboard(data?.url)}>Copy Link</button>
      </div>
    </div>
  );
};

export default Uploaded;
