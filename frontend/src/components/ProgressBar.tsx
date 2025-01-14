import React from "react";

interface ProgressBarProps {
  progress: number;
  onSeek: (percentage: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onSeek }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    onSeek(percentage);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "10px",
        backgroundColor: "#ddd",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#3f51b5",
          borderRadius: "5px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
