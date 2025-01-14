import React, { useRef, useState } from "react";

interface ProgressBarProps {
  progress: number;
  onSeek: (percentage: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onSeek }) => {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const calculatePercentage = (event: MouseEvent | React.MouseEvent) => {
    if (!progressBarRef.current) {
      return 0;
    }
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    return percentage;
  }

  const handleMouseDown = (event : React.MouseEvent) => {
    setIsDragging(true);
    event.preventDefault();
    document.body.style.userSelect = "none";
    const percentage = calculatePercentage(event);
    onSeek(percentage);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }
  const handleMouseMove = (event : MouseEvent) => {
    if (!isDragging) {
      return;
    }
    const percentage = calculatePercentage(event);
    return percentage;
  }
  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const percentage = calculatePercentage(event);
    onSeek(percentage);
  };

  return (
    <div
      ref={progressBarRef}
      style={{
        position: "relative",
        width: "100%",
        height: "10px",
        backgroundColor: "#ddd",
        borderRadius: "5px",
        cursor: "pointer",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
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
