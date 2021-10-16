import React from "react";
import Cards from "./Cards";
// import one from "./images/one.jpg";
import video from "./Video/video.mp4";
// import two from "./images/two.jpg";
// import three from "./images/three.jpg";
// import four from "./images/four.jpg";
// import five from "./images/five.jpg";
// import six from "./images/six.jpg";
// import seven from "./images/seven.jpg";
// import eight from "./images/eight.jpg";
// import nine from "./images/nine.jpg";
// import ten from "./images/ten.jpg";
// import eleven from "./images/eleven.jpg";
// import twelve from "./images/twelve.jpg";
// import thirteen from "./images/thirteen.jpg";

let fCard = {
  first: video,
  second: video,
  third: video,
  fourth: {
    first: video,
    second: video,
  },
  fifth: {
    first: video,
    second: video,
  },
  sixth: {
    first: video,
    second: video,
  },
  seventh: {
    first: video,
    second: video,
    third: video,
  },
};

const MainCard = () => {
  return (
    <>
      <div class="container-fluid w-90 d-flex align-items-center justify-content-between pb-lg-4 flex-wrap main_card_flex pb-lg-4">
        <Cards
          src={fCard}
          class="d-flex flex-column first_card small-screen col-2 mx-auto"
        />
        <Cards
          src={fCard.fourth}
          class="d-flex flex-column second_card small-screen1 col-2 mx-auto"
        />
        <Cards
          src={fCard.fifth}
          class="d-flex flex-column third_card small-screen2 col-2 mx-auto"
        />
        <Cards
          src={fCard.sixth}
          class="d-flex flex-column second_card small-screen3 col-2 mx-auto"
        />
        <Cards
          src={fCard.seventh}
          class="d-flex flex-column first_card small-screen4 col-2 mx-auto"
        />
      </div>
    </>
  );
};

export default MainCard;
