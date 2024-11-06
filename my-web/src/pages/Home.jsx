import {  Link, Outlet } from "react-router-dom";
import '../css/style.css';
import '../css/bootstrap.min.css';
 import about from '../assets/img/about.jpg'
 import cat1 from '../assets/img/cat-1.jpg'
 import cat2 from '../assets/img/cat-2.jpg'
 import cat3 from '../assets/img/cat-3.jpg'
import cat4 from '../assets/img/cat-4.jpg'
import car1 from "../assets/img/abc.jpg";

 import cors1 from '../assets/img/course-1.jpg'
 import cors2 from '../assets/img/course-2.jpg'
import cors3 from '../assets/img/course-3.jpg'



import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'




import con1 from '../assets/img/course-1.jpg'
import con2 from '../assets/img/course-2.jpg'
import con3 from '../assets/img/course-3.jpg'


const Layout = () => {
    return (

<>













<Outlet />


















<div className="container-fluid p-0 mb-5 ">
    <div className="owl-carousel header-carousel position-relative">
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid " src={car1}   alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(24, 29, 56, .7)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                  Best Online Courses
                </h5>
                <h1 className="display-3 text-white animated slideInDown">
                  The Best Online Learning Platform
                </h1>
                <p className="fs-5 text-white mb-4 pb-2">
                "Education is not preparation for life; education is life itself." —John Dewey.
                  "If you can't outplay them, outwork them." —Ben Hogan.
                     "Take pride in how far you've come. ...
                </p>
                <Link 
                  href=""
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Read More
                </Link >
                <Link 
                  href=""
                  className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >
                  Join Now
                </Link >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-carousel-item position-relative" >

        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(24, 29, 56, .7)" }}
        >
          
        </div>
      </div>
    </div>
  </div>
  
 

 
   <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
              <h5 className="mb-3">Skilled Instructors</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5 className="mb-3">Online Classes</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-home text-primary mb-4" />
              <h5 className="mb-3">Home Projects</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-book-open text-primary mb-4" />
              <h5 className="mb-3">Book Library</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 




  
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
          A preschool (sometimes spelled as pre school or pre-school), also known as nursery school, pre-primary school, 
          play school or 
          creche, is an educational establishment or learning space offering early childhood education to children 
          before they begin 
          compulsory education at primary school.
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







  <div className="container-xxl py-5 category">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Categories
        </h6>
        <h1 className="mb-5">Courses Categories</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <Link  className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src={cat1} alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">MECHANICAL</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </Link> 
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <Link  className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src={cat2} alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">COMPETR</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </Link> 
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <Link  className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src={cat3} alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">JIGRI</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </Link> 
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <Link 
            className="position-relative d-block h-100 overflow-hidden"
            href=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src={car1}
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div
              className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
              style={{ margin: 1 }}
            >
              <h5 className="m-0">MASHI-BHATIJE</h5>
              <small className="text-primary">Tea- course</small>
            </div>
          </Link> 
        </div>
      </div>
    </div>
  </div>
  
 






  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Courses
        </h6>
        <h1 className="mb-5">Popular Courses</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src={cors1} alt="" />
              <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                <Link
                  href="#"
                  className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style={{ borderRadius: "30px 0 0 30px" }}
                >
                  Read More
                </Link>
                <Link
                  href="#"
                  className="flex-shrink-0 btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "0 30px 30px 0" }}
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="text-center p-4 pb-0">
              <h3 className="mb-0">₹.149.00</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small>(123)</small>
              </div>
              <h5 className="mb-4">
                Web Design &amp; Development Course for Beginners
              </h5>
            </div>
            <div className="d-flex border-top">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-user-tie text-primary me-2" />
                VATSAL
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-clock text-primary me-2" />
                1.49 Hrs
              </small>
              <small className="flex-fill text-center py-2">
                <i className="fa fa-user text-primary me-2" />
                30 Students
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src={cors2} alt="" />
              <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                <Link
                  href="#"
                  className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style={{ borderRadius: "30px 0 0 30px" }}
                >
                  Read More
                </Link>
                <Link
                  href="#"
                  className="flex-shrink-0 btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "0 30px 30px 0" }}
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="text-center p-4 pb-0">
              <h3 className="mb-0">₹.149.00</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small>(123)</small>
              </div>
              <h5 className="mb-4">
                Web Design &amp; FOR BEST REACT
              </h5>
            </div>
            <div className="d-flex border-top">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-user-tie text-primary me-2" />
                JENISH
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-clock text-primary me-2" />
                1.49 Hrs
              </small>
              <small className="flex-fill text-center py-2">
                <i className="fa fa-user text-primary me-2" />
                30 Students
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src={cors3} alt="" />
              <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                <Link
                  href="#"
                  className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style={{ borderRadius: "30px 0 0 30px" }}
                >
                  Read More
                </Link>
                <Link
                  href="#"
                  className="flex-shrink-0 btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "0 30px 30px 0" }}
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="text-center p-4 pb-0">
              <h3 className="mb-0"> ₹.3000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small>(123)</small>
              </div>
              <h5 className="mb-4">
                Web Design &amp; FOR BEST JAVA SCRIPT
              </h5>
            </div>
            <div className="d-flex border-top">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-user-tie text-primary me-2" />
                ANKUSH
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-clock text-primary me-2" />
                1.49 Hrs
              </small>
              <small className="flex-fill text-center py-2">
                <i className="fa fa-user text-primary me-2" />
                30 Students
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 











  <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Faculties
      </h6>
      <h1 className="mb-5">Expert Faculties</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item bg-light">
          <div className="overflow-hidden">
            <img className="img-fluid" src={team1} alt="" />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-23px" }}
          >
            <div className="bg-light d-flex justify-content-center pt-2 px-1">
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">Ahejaz bhura</h5>
            <small> Faculty</small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item bg-light">
          <div className="overflow-hidden">
            <img className="img-fluid" src={team2} alt="" />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-23px" }}
          >
            <div className="bg-light d-flex justify-content-center pt-2 px-1">
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">ANJANA-THALAPATI</h5>
            <small>MINI-HOD</small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="team-item bg-light">
          <div className="overflow-hidden">
            <img className="img-fluid" src={team3} alt="" />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-23px" }}
          >
            <div className="bg-light d-flex justify-content-center pt-2 px-1">
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">VIPUL-KANIYA</h5>
            <small>Faculty</small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="team-item bg-light">
          <div className="overflow-hidden">
            <img className="img-fluid" src={team4} alt="" />
          </div>
          <div
            className="position-relative d-flex justify-content-center"
            style={{ marginTop: "-23px" }}
          >
            <div className="bg-light d-flex justify-content-center pt-2 px-1">
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-sm-square btn-primary mx-1" href="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
          <div className="text-center p-4">
            <h5 className="mb-0">SHIVANI-PATEL</h5>
            <small>HOD</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>










<div
  className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
  data-wow-delay="0.1s"
>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-3">Quick Link</h4>
        <Link className="btn btn-link" href="">
          About Us
        </Link>
        <Link className="btn btn-link" href="">
          Contact Us
        </Link>
        <Link className="btn btn-link" href="">
          Privacy Policy
        </Link>
        <Link className="btn btn-link" href="">
          Terms &amp; Condition
        </Link>
        <Link className="btn btn-link" href="">
          FAQs &amp; Help
        </Link>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-3">Contact</h4>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt me-3" />
          123 Street, New York, USA
        </p>
        <p className="mb-2">
          <i className="fa fa-phone-alt me-3" />
          +012 345 67890
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope me-3" />
          info@example.com
        </p>
        <div className="d-flex pt-2">
          <Link className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-twitter" />
          </Link>
          <Link className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-youtube" />
          </Link>
          <Link className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-linkedin-in" />
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-3">Gallery</h4>
        <div className="row g-2 pt-2">
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={con1}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={con2}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={con3}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={con2}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={con3}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid bg-light p-1"
              src={con1}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-3">Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
          <input
            className="form-control border-0 w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            type="button"
            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <Link className="border-bottom" href="#">
            Your Site Name
          </Link>
          , All Right Reserved.
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By{" "}
          <Link className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </Link>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <Link href="">Home</Link>
            <Link href="">Cookies</Link>
            <Link href="">Help</Link>
            <Link href="">FQAs</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

















</>

    );
}

export default Layout