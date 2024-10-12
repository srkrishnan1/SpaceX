//Wrapper fro video player

import React from "react";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoplay = false,
  muted = false,
  loop = false,
  controls = false,
  className = "",
}) => {
  return (
    <div className={`video-player__wrapper ${className}`}>
      <video
        src={src}
        className="video-player"
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        onError={(e) => console.error("Error loading video", e)}
      />
    </div>
  );
};

export default VideoPlayer;
