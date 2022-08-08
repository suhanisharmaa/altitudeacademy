import React from "react";
import Flipcard from "./Flipcard";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <div className="home_img">
        <img className="mySlides" src="images/homeimg.jpeg" alt="" />
      </div>
      <h2 className="top_h">
        Get access to best in class worksheets, practice sheets and question
        papers
      </h2>
      <p className="top_para">
        Get Access to our Study Material consisting of curated Question Papers,
        previous years Question Papers, chapter-wise and concept wise
        worksheets, with solutions, handcrafted by experienced and professional
        educators at <strong>Altitude Academy</strong>, and updated bi-weekly at
        a minimal price of Rs.99/-
      </p>

      <div className="steps_main">
        <h2>Steps to Access our Study Material</h2>
        <div className="steps">
          <div className="steps_left">
            <h3 className="steps_heading">Step 1 :</h3>
            <p className="steps_content">Go to our 'Study Materials' section</p>
            <h3 className="steps_heading">Step 2 :</h3>
            <p className="steps_content">
              Browse through the uploads and select the sheet you would like to
              purchase
            </p>
            <h3 className="steps_heading">Step 3 :</h3>
            <p className="steps_content">
              Pay a minimal amount of 89/- and check your registered mail id
            </p>

            <p>Keep logging in for biweekly uploads</p>

            <button>
              <Link to="/studymaterial">Study Material</Link>
            </button>
          </div>

          <div className="steps_right">
            <img src="images/stepsf.png" alt="" />
          </div>
        </div>
      </div>

      <div className="why">
        <h2>Why Altitude Academy?</h2>
        <div className="whys">
          <div className="why_option">
            <img src="images/study.png" alt="" className="why_img" />
            <div className="why_content">Concept driven teaching</div>
          </div>

          <div className="why_option">
            <img src="images/studying.png" alt="" className="why_img" />
            <div className="why_content">Customized Approach</div>
          </div>

          <div className="why_option">
            <img src="images/studying (1).png" alt="" className="why_img" />
            <div className="why_content">Parents and Students Counselling</div>
          </div>

          <div className="why_option">
            <img src="images/reading.png" alt="" className="why_img" />
            <div className="why_content">Experienced faculty</div>
          </div>

          <div className="why_option">
            <img src="images/learning.png" alt="" className="why_img" />
            <div className="why_content">Individual Attention</div>
          </div>
        </div>
      </div>

      <div className="courses_bar">
        <h2>Courses we offer at Altitude Academy</h2>
        <p>
          Check out our curated course structures
          <br />
          Enrol Today!
        </p>

        <div className="courses_card">
          <div className="container">
            <div className="row justify-content-md-center">
            <Card title="CRASH COURSE" description="Oct-Dec and Jan-Mar"/>
            <Card title="MPC" description="3 days a week multiple batches"/>
            <Card title="BiPC" description="3 days a week multiple batches"/>
            </div>
            <div className="row justify-content-md-center">
            <Card title="VI-X" description="All Subjects, All Branches"/>
            <Card title="I-V" description="All Subjects"/>
            <Card title="EXAM BATCH" description="Maths Coaching for competitive exams"/>
            </div>
          </div>
          
        </div>
      </div>

      <div className="love">
        <h2>Happy Parents and Students</h2>
        <div className="carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/Screenshot (486).png"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/Screenshot (487).png"
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/Screenshot (488).png"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <button>
          <Link to="/reviews">Reviews by our students➡️</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
