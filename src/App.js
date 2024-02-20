import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Event1 from "./assets/images/event_1.jpg";
import Event2 from "./assets/images/event_2.jpg";
import Event3 from "./assets/images/event_3.jpg";
import Event4 from "./assets/images/event_4.jpg";
import Carousel from "./components/Carousel";
import Wedding from "./assets/images/wedding.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function App() {
  return (
    <div>
      <Navbar />
      <div className="video-container">
        {/* Replace 'your-video-url.mp4' with the actual URL or path to your video */}
        <video autoPlay loop muted>
          <source
            src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4"
            type="video/mp4"
          />
        </video>
        <div className="text-overlay">
          <h1 style={{ fontSize: "6rem" }}>Simply The Finest</h1>
        </div>
      </div>

      <div className="content_section">
        <div className="left">
          <div className="welcome">WELCOME TO 24 CARROTS</div>
          <div className="remarkable">Remarkable Catering & Events</div>
          <div className="writing">
            24 Carrots is the premier catering and events company of choice in
            Southern California. We create remarkable experiences by offering
            the finest quality foods and providing unsurpassed personalized
            service, driven by our passion for special occasions.
          </div>
          <div className="btn-content">
            <button className="btn">GET IN TOUCH</button>
          </div>
        </div>

        <div className="right">
          <Carousel>
            <div class="carousel-cell">
              <img src={Event1} alt="carousel"></img>
            </div>
            <div class="carousel-cell">
              <img src={Event2} alt="carousel"></img>
            </div>
            <div class="carousel-cell">
              <img src={Event3} alt="carousel"></img>
            </div>
            <div class="carousel-cell">
              <img src={Event4} alt="carousel"></img>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="wedding_section">
        <div className="wed_left">
          <div className="wed_box">
            <img src={Wedding} alt="wedding"></img>
          </div>
        </div>
        <div className="wed_right">
          <div className="wed_head">Making Every Experience Magical</div>

          <div className="wed_container">
            <div className="wed_list">
              <ul>
                <li>Weddings</li>
                <br></br>
                <li>Social</li>
                <br></br>
                <li>Corporate</li>
                <br></br>
                <li>Venues</li>
                <br></br>
              </ul>
            </div>
            <div className="wed_txt">
              <h4>Exceptional Weddings</h4>
              <br></br>
              <p>
                The most important day of your life, is ours too. Your wedding
                should be the ultimate celebration of your relationship, and our
                team of experts guide you through the process, offering peace of
                mind and a remarkable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
