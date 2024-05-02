// import { Carousel } from "bootstrap";
import React from "react"

import { Carousel } from "bootstrap";


const Mycarosel=()=>{
    return (
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets.newatlas.com/dims4/default/bb3e3d4/2147483647/strip/true/crop/960x640+220+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fdb%2F87%2F0f865b3247a7924992242b36f028%2F6000.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://visualfinds.com/wp-content/uploads/2023/09/Why-Should-You-Choose-4K-Projectors-over-Any-Other-Resolution-1024x576.jpeg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.lg.com/content/dam/channel/wcms/in/magazine/heres-an-insight-into-hd-tv-and-uhd-tv-should-you-upgrade/heres-an-insight-into-hd-tv-and-uhd-tv-should-you-upgrade-02-D.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
      );
      
}
export default Mycarosel