import React from "react";

function Video(props) {
  return (
    <div>
      <video
        loop
        controls
        autostart="true"
        autoPlay
        muted
        src={props.videoSrc}
      />
    </div>
  );
}

export default Video;
