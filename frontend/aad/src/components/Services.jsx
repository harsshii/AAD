import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Birthday Parties</h3>
          <p>We plan and manage birthday parties for all ages.</p>
          <br></br>
        </div>
        <div className="service-item">
          <h3>Weddings</h3>
          <p>We provide full-service wedding planning and management.</p>
          <br></br>
        </div>
        <div className="service-item">
          <h3>Corporate Events</h3>
          <p>We plan and manage corporate events and parties.</p>
        </div>
        <div className="service-item">
          <h3>Holiday Parties</h3>
          <p>We plan and manage holiday parties and events.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
