import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Lazy load your components
const HomeComponent = React.lazy(() => import('./components/HomeComponent'));
const LoginComponent = React.lazy(() => import('./components/LoginComponent'));
const SignupComponent = React.lazy(() => import('./components/SignupComponent'));
const AdminDashboard = React.lazy(() => import('./components/Admin/AdminDashboard'));
const AdminProfile = React.lazy(() => import('./components/Admin/AdminProfile'));
const AdminTable = React.lazy(() => import('./components/Admin/AdminTable'));
const ProfilePage = React.lazy(() => import('./components/User/ProfilePage'));
const VenueDetails = React.lazy(() => import('./components/User/VenueDetails'));
const Payment = React.lazy(() => import('./components/User/Payment'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/home' element={<HomeComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/signup' element={<SignupComponent />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/admintable' element={<AdminTable />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/adminprofile' element={<AdminProfile />} />
          <Route path='/venue-details' element={<VenueDetails />} />
        
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
