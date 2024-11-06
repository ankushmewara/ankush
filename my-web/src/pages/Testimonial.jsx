import { Link, Outlet } from "react-router-dom";
// import team1 from '../assets/img/team-1.jpg'
// import team2 from '../assets/img/team-2.jpg'
// import team3 from '../assets/img/team-3.jpg'
// import team4 from '../assets/img/team-4.jpg'

import testi1 from '../assets/img/testimonial-1.jpg'
import testi2 from '../assets/img/testimonial-2.jpg'
import testi3 from '../assets/img/testimonial-3.jpg'
import testi4 from '../assets/img/testimonial-4.jpg'





const Testimonial = () => {



   return(


       <>
       
      





<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="text-center">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Testimonial
      </h6>
      <h1 className="mb-5">Our Students Say!</h1>
    </div>
    <div className="owl-carousel testimonial-carousel position-relative">
      <div className="testimonial-item text-center">
        <img
          className="border rounded-circle p-2 mx-auto mb-3"
          src={testi1}
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
      <div className="testimonial-item text-center">
        <img
          className="border rounded-circle p-2 mx-auto mb-3"
          src={testi2}
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
      <div className="testimonial-item text-center">
        <img
          className="border rounded-circle p-2 mx-auto mb-3"
          src={testi3}
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
      <div className="testimonial-item text-center">
        <img
          className="border rounded-circle p-2 mx-auto mb-3"
          src={testi4}
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">Client Name</h5>
        <p>Profession</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>






       </>



    



   );
}

export default Testimonial;