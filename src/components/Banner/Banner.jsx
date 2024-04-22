import React from "react";

function Banner() {
  return (
    <>
      <section className="banner-items">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="banner-content">
                <p className="banner-subtitle">Proin gravida nibh vel velit.</p>
                <h1 className="banner-title">Cycling Lovers</h1>
                <p className="banner-desc">
                  This is Photoshop's version of Lorem Ipsum. Proin
                  <br />
                  gravida nibh vel velit auctor aliquet.
                </p>
                <div className="banner-btn">
                  <i class="fa-solid fa-play"></i>
                  <a href="#">Play Video</a>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
