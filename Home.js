import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h2>Welcome to Homoeoheights</h2>
      <p>Your haven for natural and holistic healing, blending the wisdom of homeopathy with modern healthcare.</p>
      <Link to="/appointment" className="btn">Book an Appointment</Link>
    </section>
  );
};

export default Home;
