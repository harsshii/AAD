import { Link } from 'react-router-dom';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import NavBar from '../NavBar';
import './Booking.css'; // Import CSS file for styling

export default function Booking() {
  return (
    <div>
      <NavBar />
      <div className='arrange'>

      <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          <Link to="/venue-details" className="zoom">
            <img
              src='https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
             <div className="text-overlay">Table Decor</div>
            
          </Link>

          <Link to="/venue-details" className="zoom">
            <img
              src='https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
             <div className="text-overlay">Wedding</div>
           
          </Link>
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
          <Link to="/venue-details" className="zoom">
            <img
              src='https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Mountains in the Clouds'
            />
             <div className="text-overlay">Anniversary</div>
            
          </Link>

          <Link to="/venue-details" className="zoom">
            <img
              src='https://images.pexels.com/photos/7221139/pexels-photo-7221139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
            <div className="text-overlay">Birthday Parties</div>
           
          </Link>
        </MDBCol>

        <MDBCol lg={4} className='mb-4 mb-lg-0'>
          <Link to="/venue-details" className="zoom">
            <img
              src='https://images.pexels.com/photos/6405772/pexels-photo-6405772.jpeg?auto=compress&cs=tinysrgb&w=600'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Waves at Sea'
            />
            <div className="text-overlay">Corporate Events</div>
          
          </Link>

          <Link to="/venue-details" className="zoom">
            <img
              src='https://images.pexels.com/photos/6518876/pexels-photo-6518876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Yosemite National Park'
            />
            <div className="text-overlay">Other Events</div>
          </Link>
        </MDBCol>
      </MDBRow>
      </div>
    </div>
  );
}
