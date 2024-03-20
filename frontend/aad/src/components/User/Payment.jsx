

function App() {
  return (
    <div className='container-fluid bg-dark'>

      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col'>

          <div className='card my-4'>

            <div className='row g-0'>

              <div className='col-md-6 d-none d-md-block'>
                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="card-img-top rounded-start" fluid/>
              </div>

              <div className='col-md-6'>

                <div className='card-body text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Book Your Slot </h3>

                  <div className='row'>

                    <div className='col-md-6'>
                      <input className='form-control mb-4' placeholder='First Name' type='text'/>
                    </div>

                    <div className='col-md-6'>
                      <input className='form-control mb-4' placeholder='Last Name' type='text'/>
                    </div>

                  </div>
                    Pick your slot!! 
                  <input className='form-control mb-4' placeholder='slot' type='date'/>

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                    <div className='form-check form-check-inline'>
                      <input className='form-check-input' type='radio' id='femaleRadio' value='female'/>
                      <label className='form-check-label' htmlFor='femaleRadio'>Female</label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input className='form-check-input' type='radio' id='maleRadio' value='male'/>
                      <label className='form-check-label' htmlFor='maleRadio'>Male</label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input className='form-check-input' type='radio' id='otherRadio' value='other'/>
                      <label className='form-check-label' htmlFor='otherRadio'>Other</label>
                    </div>
                  </div>

                  <div className='row'>

                    <div className='col-md-6'>
                      <select className='form-select mb-4' aria-label='State'>
                        <option>State</option>
                        <option>Tamilnadu</option>
                        <option>Karnataka</option>
                        <option>Kerala</option>
                      </select>
                    </div>

                    <div className='col-md-6'>
                      <select className='form-select mb-4' aria-label='City'>
                        <option>City</option>
                        <option>Coimbatore</option>
                        <option>Chennai</option>
                        <option>Option 3</option>
                      </select>
                    </div>

                  </div>

                  <input className='form-control mb-4' placeholder='Pincode' type='text'/>
                  <input className='form-control mb-4' placeholder='Event name' type='text'/>
                  <input className='form-control mb-4' placeholder='Email ID' type='text'/>

                  <div className="d-flex justify-content-end pt-3">
                    <button className='btn btn-light btn-lg'>Reset all</button>
                    <button className='btn btn-warning btn-lg ms-2'>Submit form</button>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
