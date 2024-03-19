import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom';

// import Footer from './components/Footer';



import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import HomeComponent from './components/HomeComponent';


function App() {
  return (
    <BrowserRouter>
     

      <Routes>
        <Route path='/' exact element={<HomeComponent/>}/>
        <Route path='/login' exact element={<LoginComponent/>}/>
        <Route path='/signup' exact element={<SignupComponent/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App;