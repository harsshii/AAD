import  { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from 'mdb-react-ui-kit';
import AdminNavbar from './AdminNavBar';

const AdminTable = () => {
  const [modal, setModal] = useState(false);
  const [bookings, setBookings] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', date: '2024-04-01', venue: 'Venue A' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', date: '2024-04-05', venue: 'Venue B' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', date: '2024-04-10', venue: 'Venue C' },
  ]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEdit = (id) => {
    const booking = bookings.find(booking => booking.id === id);
    setSelectedBooking(booking);
    toggleModal();
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings);
  };

  const handleSave = () => {
    // Handle saving changes to the selected booking
    toggleModal();
  };

  return (
    <>
    <AdminNavbar/>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.date}</td>
              <td>{booking.venue}</td>
              <td>
                <MDBBtn color='warning' size='sm' onClick={() => handleEdit(booking.id)}>
                  <MDBIcon icon='edit' />
                </MDBBtn>
                <MDBBtn color='danger' size='sm' onClick={() => handleDelete(booking.id)}>
                  <MDBIcon icon='trash-alt' />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

      <MDBModal show={modal} tabIndex='-1'>
        <MDBModalHeader>
          Edit Booking
        </MDBModalHeader>
        <MDBModalBody>
          <MDBInput label='Name' value={selectedBooking?.name} />
          <MDBInput label='Email' value={selectedBooking?.email} />
          <MDBInput label='Date' value={selectedBooking?.date} />
          <MDBInput label='Venue' value={selectedBooking?.venue} />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color='secondary' onClick={toggleModal}>
            Close
          </MDBBtn>
          <MDBBtn color='primary' onClick={handleSave}>
            Save changes
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </>
  );
};

export default AdminTable;
