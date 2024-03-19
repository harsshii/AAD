import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import Footer from './Footer';

function AdminDashboard() {
  return (
    <div>

    <div id="AdminDashboard">
      <section className="hero">
        <div className='overlay4'></div>
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1 style={{ color: 'antiquewhite' }}>Party Event Planner: Your One-Stop Shop for Unforgettable Events</h1>
          <h3 style={{ color: "azure" }}>Creating Memorable Moments for Any Occasion</h3>
          <p className='heading'>EVENTS</p>
          <Link to="/AddEvent"><a className="btn">POST EVENTS</a></Link>
          <Link to="/ViewEvent"><a className="btn">View EVENTS</a></Link>
          <br></br>
          <p className='heading1'>BOOKINGS</p>
          <Link to="/Admintable"><a className="btn">VIEW BOOKINGS</a></Link>
        </div>
      </section>
     
    </div>
    <Footer/>
    </div>
  );
}

export default AdminDashboard;