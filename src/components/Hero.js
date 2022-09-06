import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade pt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container rounded py-3 sliders">
          <div className="carousel-item active row d-flex align-items-center">
            <div className="hero-content ps-5 pb-5 col-md-7">
              <h2>Mega LCD TV For Sports</h2>
              <p>
                This is the best headphone in the world for people who just want
                to waste time in front of funky world.
              </p>
              <h3>$1200</h3>
              <button className="btn btn-info">Buy now</button>
            </div>
            <div className="hero-img col-md-5">
              <img
                src="./images/banner-images/tv.png"
                className="d-block w-75"
                alt="..."
              />
            </div>
          </div>

          <div className="carousel-item row d-flex align-items-center">
            <div className="hero-content ps-5 col-md-7">
              <h2>Cool Dude Headphone</h2>
              <p>
                This is the best headphone in the world for people who just want
                to waste time in front of funky world.
              </p>
              <h3>$420</h3>
              <button className="btn btn-info">Buy now</button>
            </div>
            <div className="hero-img col-md-5">
              <img
                src="./images/banner-images/headphone.png"
                className="d-block w-75"
                alt="..."
              />
            </div>
          </div>

          <div className="carousel-item row d-flex align-items-center">
            <div className="hero-content ps-5 col-md-7">
              <h2>X-Box for your living room</h2>
              <p>
                This is the best headphone in the world for people who just want
                to waste time in front of funky world.
              </p>
              <h3>$600</h3>
              <button className="btn btn-info">Buy now</button>
            </div>
            <div className="hero-img col-md-5">
              <img
                src="./images/banner-images/xbox.png"
                className="d-block w-75"
                alt="..."
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
