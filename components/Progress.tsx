import React from "react";
import styles from "@/styles/Progress.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

const Progress = () => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressContent}>
        <p>Uploading...</p>
        <Box sx={{ width: "80%" }} className="progressBar">
          <LinearProgress />
        </Box>
      </div>
    </div>
  );
};

export default Progress;
