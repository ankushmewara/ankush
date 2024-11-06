import { Link } from "react-router-dom";

import about from '../assets/img/about.jpg'

const About = () => {
  return (
    <>
     



        
      <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src={about}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 className="mb-4">Welcome to JHDP HIGH SCHOOL</h1>
          <p className="mb-4">
            an educational establishment or learning space offering early childhood education to children before they
           begin compulsory education at primary school..
          </p>
          <p className="mb-4">
          A preschool (sometimes spelled as pre school or pre-school), also known as nursery school, pre-primary school, 
          play school or 
          creche, is an educational establishment or learning space offering early childhood education to children 
          before they begin 
          compulsory education at primary school.
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Skilled Instructors
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Online Classes
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                International Certificate
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Skilled Instructors
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Online Classes
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                NO Certificate
              </p>
            </div>
          </div>
          <Link  className="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </Link >
        </div>
      </div>
    </div>
  </div> 
      



    </>
  );
};
export default About;
