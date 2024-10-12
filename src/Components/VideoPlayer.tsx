import React from "react";

interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;  
  muted?: boolean;  
  loop?: boolean;  
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoplay = false,
  muted = false,
  loop = false,
  controls = false,
}) => {
  return (
    <div className="video-player__wrapper">
      <video
        src={src}
        className="video-player"
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
      />
    </div>
  );
};

export default VideoPlayer;
