"use client";

import Image from "next/image";
import React, { useState } from "react";

interface VideoWrapperProps {
  imageSrc: string;
  videoLink: string;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({ imageSrc, videoLink }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-wrapper">
      {!isPlaying ? (
        <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
          <img src={imageSrc} alt="Video thumbnail" />
        </div>
      ) : (
        <iframe
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoLink}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoWrapper;
