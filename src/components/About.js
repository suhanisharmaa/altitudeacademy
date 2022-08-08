import React from "react";
import "./About.css";
import { Carousel } from "react-bootstrap";
import CallIcon from "@material-ui/icons/Call";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="overview">
        <div className="overview_content">
          <div className="overview_heading">
            <h1>
              <strong>OUR STORY</strong>
            </h1>
          </div>
          <div className="card">
            <div className="overview_text">
              <h3>HOW WE STARTED</h3>
              Our Founder, Shweta Sharma has been teaching ever since she was a
              student. She has had an experience of around 15 years in the
              education field. Her forte being Mathematics, she aimed to conquer
              the 'fear of Maths' from every child that came to her. Her
              creative method of teaching, helped her to do so, build concepts
              from bottom-up in the child's mind as well as get the child hooked
              to the subject. With this Vision in mind, was established ALTITUDE
              ACADEMY in the year 2016. Started only with a handful of students,
              Altitude Academy now has a community of students, teachers, alumni
              that have forever taken a piece in Altitude Academy's story.
              <h3>OUR MISSION</h3>
              Our vision is to nurture the students to explore their full potential so as to boost their self-confidence and morale.
              Our mission is to provide the best tuition to every student with resources and opportunities to learn and achieve academic success.
We aim to help all students achieve their potential by giving them encouragement, understanding and individualised attention.
We strive to raise our students’ aspiration and achievement levels by infusing them with enthusiasm for the subject, self-confidence, motivation and direction.
            </div>
          </div>
        </div>
      </div>

      <div className="teachers">
        <h2>OUR TEACHERS</h2>

        <div className="teacher_option">
          <div className="teacher_left">
            <img src="images/shweta.jpeg" alt="" />
            <div className="p">
              <p>SHWETA SHARMA</p>
            </div>
          </div>
          <div className="teacher_right">
            <h2>OUR FOUNDER</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              optio provident similique accusantium magni, fuga expedita fugit
              ratione iure in nulla enim alias obcaecati beatae eveniet non
              suscipit reprehenderit omnis ex. Ad, voluptas possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit magnam modi, excepturi nesciunt velit necessitatibus reiciendis? Quia, dolor sunt voluptatum reprehenderit minima perferendis ducimus laborum mollitia magnam, labore facere? Accusantium laborum perferendis laudantium atque mollitia veniam! Molestias odit placeat tempora, consequuntur, exercitationem dolores nihil eos ipsum ipsam, eius cumque.
            </p>
          </div>
        </div>

        <div className="teacher_option">
          <div className="teacher_left">
            <img src="images/jyothi.jpeg" alt="" />
            <div className="p">
              <p>JYOTHI MA'AM</p>
            </div>
          </div>
          
          <div className="teacher_right">
            <h2>OUR PILLAR OF STRENGTH</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              optio provident similique accusantium magni, fuga expedita fugit
              ratione iure in nulla enim alias obcaecati beatae eveniet non
              suscipit reprehenderit omnis ex. Ad, voluptas possimus.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis alias aperiam eaque accusantium totam, voluptas aspernatur consequuntur deserunt ad earum suscipit quis vitae? Officiis corrupti reiciendis veniam sapiente aspernatur quo numquam maiores, ipsum explicabo beatae est eveniet excepturi doloremque hic et perferendis at aut, velit deserunt optio perspiciatis odio rem.
            </p>
          </div>
        </div>

        <div className="photos">
          <h2>HAPPY MOMENTS AT ALTITUDE ACADEMY</h2>
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

          {/* <div className="carousel">//Photos Carousel//</div> */}
          <button>
            <Link to="/gallery">Gallery➡️</Link>
          </button>
        </div>

        <div className="details">
          <div className="map">
            <h2>LOCATE US</h2>

            <div className="map_img">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5917055136624!2d78.49106841408747!3d17.479245604751814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a8bdc9193b9%3A0x87fe6e004ebb35ae!2sAltitude%20Academy%20Coaching%20and%20Tutoring!5e0!3m2!1sen!2sin!4v1655317673494!5m2!1sen!2sin"></iframe>
            </div>
            <h3>
              Altitude Academy, Manasarovar Heights Road, Near Ushodaya
              Supermarket, Trimulgherry, Secunderabad, 500009
            </h3>
          </div>
          </div>


          <div className="contact">
            <h2>CONTACT US</h2>
            <div className="container">
              <div className="row justify-content-md-center ab">
                <div className="col-4"><a href="tel:9391035332" target="_blank">
                  <CallIcon />
                </a>
                </div>
                <div className="col-4">
                <a href="mailto:altitudeacademy9.com" target="_blank">
                  <MailIcon />
                </a>
                </div>
                <div className="col"></div>
                <div className="col">
                <a
                  href="https://www.instagram.com/altitude_academy/?hl=en"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                </div>
                <div className="col">
                <a
                  href="https://www.facebook.com/altitudeacademyhyd/"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                </div>
                <div className="col"></div>
              </div>
              <div className="row justify-content-md-center ab">
                   <div className="col"><h3>BY PHONE</h3>
                <p>+919391035332</p></div>
                <div className="col">
                <h3>MAIL US</h3>
                <p>altitudeacademy9@gmail.com</p>
                </div>
                <div className="col"><h3>SOCIALS</h3>
                <p>Our social media handles</p></div>
              </div>
            </div>
            

            
            
          
        </div>
      </div>
    </div>
  );
}

export default About;
