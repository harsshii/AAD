
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavBar';

const AdminDashboard = () => {
  return (
    <div>
<AdminNavbar/>
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-4">Admin Dashboard</h2>

      <MDBRow className="mb-4">
        <MDBCol md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Manage Users</MDBCardTitle>
              <MDBCardText>
                View and manage user accounts.
              </MDBCardText>
              <Link to="/admintable">
        <MDBBtn color="primary">View Venues</MDBBtn>
      </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Manage Venues</MDBCardTitle>
              <MDBCardText>
                Add, edit, or delete venue details.
              </MDBCardText>
              <Link to="/admintable">
        <MDBBtn color="primary">View Venues</MDBBtn>
      </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Manage Bookings</MDBCardTitle>
              <MDBCardText>
                View and manage bookings made by users.
              </MDBCardText>
              <Link to="/admintable">
        <MDBBtn color="primary">View Venues</MDBBtn>
      </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default AdminDashboard;
