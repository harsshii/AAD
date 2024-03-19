

import './HomeComponent.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Slider from 'react-slick';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HomeComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>

    <div className="home-page">
      <NavBar />
      <section className="hero">
        <div className="container"><h1 className="animated-text">Welcome to our <br /> Trinity Event Hospitality</h1>
        </div>
      </section>
      <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-item">
            <img src="https://images.pexels.com/photos/12876490/pexels-photo-12876490.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Party" className="circle-image" />
            <h3>Birthday Parties</h3>
            <p>We plan and manage birthday parties for all ages.</p>
          </div>
          <div className="service-item">
            <img src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding" className="circle-image" />
            <h3>Weddings</h3>
            <p>We provide full-service wedding planning and management.</p>
          </div>
          <div className="service-item">
            <img src="https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Corporate Event" className="circle-image" />
            <h3>Corporate Events</h3>
            <p>We plan and manage corporate events and parties.</p>
          </div>
          <div className="service-item">
            <img src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Holiday Party" className="circle-image" />
            <h3>Holiday Parties</h3>
            <p>We plan and manage holiday parties and events.</p>
          </div>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <div className="image-slider">
          <h2>Gallery</h2>
          <Slider {...settings}>
            <div><img src="https://images.pexels.com/photos/6211414/pexels-photo-6211414.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 1" /></div>
            <div><img src="https://images.pexels.com/photos/8384310/pexels-photo-8384310.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 2" /></div>
            <div><img src="https://images.pexels.com/photos/12876490/pexels-photo-12876490.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 3" /></div>
            <div><img src="https://images.pexels.com/photos/16813352/pexels-photo-16813352/free-photo-of-hello-kitty-birthday-cake-with-decor.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 4" /></div>
            <div><img src="https://images.pexels.com/photos/6210763/pexels-photo-6210763.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 5" /></div>
            <div><img src="https://images.pexels.com/photos/6113613/pexels-photo-6113613.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 6" /></div>
            <div><img src="https://images.pexels.com/photos/6479601/pexels-photo-6479601.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery Image 7" /></div>

          </Slider>
        </div>
      </section>
      <section className="about" id="about">
      <div className='aboutt'>
        
      <div className="col-lg-9 col-xl-8" style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginLeft:'250px',color:'#26867e'}}>
<div className="main-content p-5">
  <div className="main-header mb-4">
    <h6 className="sub-heading text-uppercase d-block mb-2">Who I am</h6>
    <h1 className="main-heading d-inline-block text-uppercase pb-3 border-bottom">&lt; About &gt;</h1>
  </div>

  <div className="row mb-5">
    <div className="mb-5 mb-sm-4 col-md-4">
      <img src="https://res.cloudinary.com/dbhfpccxj/image/upload/v1708889919/logo_fdbvyr.jpg" alt="Colorful Wall" />
    </div>
    <div className="col-md-8">
      <div className="about__text mb-5 mb-sm-4 mb-md-4">
        <h3>EVENT PARTY WORX</h3>
        <center>
        <h5 style={{color:'black',fontSize:'15px'}}>Expert event planners specializing in unforgettable Birthday celebrations,corporate events,Weddings,Holiday parties personalized 
        experiences tailored to your unique preferences and desires.</h5>
        </center>
      </div>
      <div className="about__skills" >
        <div className="row no-gutters mb-0 mb-sm-4" >
          <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6" style={{marginTop:'30px'}}>
            <div className="media">
            <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921759/planning_pjany6.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Plan</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Planning meticulously, we craft the blueprint for unforgettable experiences.</p>
              </div>
            </div>
          </div>
          <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
            <div className="media">
            <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921739/execute_mj5poc.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Execute</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Executing flawlessly, we bring dreams to life with precision and passion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters mb-0 mb-sm-4">
          <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
            <div className="media">
              <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921741/organize_wpwlef.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Organize</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Organizing seamlessly, we orchestrate every detail to perfection.</p>
              </div>
            </div>
          </div>
          <div className="mb-0 pl-sm-3 col-sm-6">
            <div className="media">
            <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921739/clock_tbcq6q.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Time</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Punctual to the second, we ensure events unfold like clockwork, leaving no room for delays.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div className='abt'>

    <div className="row no-gutters pt-5 border-top">
      <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
        <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922999/event_qpher4.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">250</p>
            <p className="m-0 text-uppercase">Events</p>
          </div>
        </div>
      </div>

      <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
        <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922997/customer_vhe0di.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">300</p>
            <p className="m-0 text-uppercase">Customer</p>
          </div>
        </div>
      </div>

      <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
        <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922937/rate_eyr6q8.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">4.5</p>
            <p className="m-0 text-uppercase">Rating</p>
          </div>
        </div>
      </div>

      <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
          <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922934/feedback_o9dltq.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">1000</p>
            <p className="m-0 text-uppercase">Feedback</p>
          </div>
        </div>
      </div>
    </div>

</div>
</div>
      </div>
      </div>
      </section>
      <section className="contact" id="contact">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

<div className="container2">
  <div style={{ display: 'block', textAlign: 'center' }}>
    <div>
      <h2 >Anytime, Anywhere, Any device.</h2>
      <h1 className='sd'>We are here!! Let us Talk</h1>
      <h2 >Get your free Advice about the <br></br>Plans and Packages that suits you</h2>
    </div>
    <div className="counselling">
      <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1709657996/counselling_jefu2s.png' alt="Counselling" style={{ width: '200px', height: '200px' }} />
    </div>
  </div>
</div>

<div className='box'>
          <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
            <h2>Contact us</h2>

            <MDBValidationItem invalid feedback='Please provide your name.'>
              <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide your email.'>
              <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide mail subject.'>
              <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide a message text.'>
              <MDBTextArea wrapperClass='mb-4' label='Message' required />
            </MDBValidationItem>

            <MDBValidationItem feedback=''>
              <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
            </MDBValidationItem>

            <MDBBtn type='submit' color='primary' block className='my-4'>
              Send
            </MDBBtn>
          </MDBValidation>
        </div>
      </div>
    </section>
   
      </div>
    <Footer/>
    </div>
  );
};

export default HomeComponent;