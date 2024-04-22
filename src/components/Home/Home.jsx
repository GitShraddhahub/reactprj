import React from "react";
function Home() {
  return (
    <>
      <section className="header-item">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-lg-0 gap-5">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="contact-btn">
                <a href="#">Get in Touch</a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Home;
