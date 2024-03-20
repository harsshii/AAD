
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Admin Panel</MDBNavbarBrand>
        <MDBNavbarNav className='d-flex justify-content-end'>
          <MDBNavbarItem>
            <Link to='/dashboard'>
              <MDBNavbarLink>Dashboard</MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <Link to='/admintable'>
              <MDBNavbarLink>Admin Table</MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <Link to='/adminprofile'>
              <MDBNavbarLink>Profile</MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
          <Link to='/login'>
              <MDBNavbarLink color='red'>Logout</MDBNavbarLink>
            </Link>
           
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default AdminNavbar;
