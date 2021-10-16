import React from "react";
import Image from "./Video/default-image.png";

import HoverVideoPlayer from 'react-hover-video-player';


const Cards = (props) => {
  return (
    <>
      <div className={props.class}>
        {/* <video
          src={props.src.first}
          alt="video_source"
          className="card_img img_one"
        /> */}
         <HoverVideoPlayer
            videoSrc={props.src.first}
            className="card_img img_one"
            restartOnPaused
            muted={false}
            pausedOverlay={
              <img
                src={Image}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
          />
        {/* <HoverVideoPlayer src={props.src.second} alt="video_source" className="card_img img_two" /> */}
        <HoverVideoPlayer
            videoSrc={props.src.second}
            className="card_img img_two"
            restartOnPaused
            muted={false}
            pausedOverlay={
              <img
                src={Image}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
          />
          {/* <HoverVideoPlayer
            videoSrc={props.src.third}
            className="card_img "
            restartOnPaused
            muted={false}
            pausedOverlay={
              <img
                src={Image}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "",
                }}
              />
            }
          /> */}


        
      </div>
    </>
  );
};

export default Cards;
