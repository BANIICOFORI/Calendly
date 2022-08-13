import React from "react";

function Home() {
  return (
    <>
      <main>
        <div class="home">
          <div class="home-text">
            <h1>
              Easy scheduling <span>ahead</span>
            </h1>
            <p>
              Calendly is your hub for scheduling meetings professionally and
              efficiently, eliminating the hassle of back-and-forth emails so
              you can get back to work
            </p>
            <label>
              <input type="text" placeholder="Enter your email" />
              <button>Sign up</button>
            </label>
            <p class="imp">
              Create your free account. No credit card required.
            </p>
          </div>
          <div class="home-img">
            <img src="images/calendly-home.jpg" alt="" />
          </div>
        </div>
        <div class="users">
          <div class="icons">
            <i class="fa fa-digg"></i>
            <i class="fab fa-dropbox"></i>
            <i class="fa fa-wechat"></i>
            <i class="fa fa-cc-visa"></i>
            <i class="fa fa-cc-paypal"></i>
          </div>
        </div>
        <div class="how-to">
          <div class="one">
            <p class="num">1.</p>
            <div class="rule">
              <h4>
                Create
                <br /> simple rules
              </h4>
              <p>
                Let Calendly know your availability preferences and it’ll do the
                work for you.
              </p>
            </div>
          </div>
          <div class="one">
            <p class="num">2.</p>
            <div class="rule">
              <h4>
                Create
                <br /> simple rules
              </h4>
              <p>
                Let Calendly know your availability preferences and it’ll do the
                work for you.
              </p>
            </div>
          </div>
          <div class="one">
            <p class="num">3.</p>
            <div class="rule">
              <h4>
                Create
                <br /> simple rules
              </h4>
              <p>
                Let Calendly know your availability preferences and it’ll do the
                work for you.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer id="footer">
        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Baniico Technology</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="https://bootstrapmade.com/">Baniico</a>
            </div>
          </div>
          <div class="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="#" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
