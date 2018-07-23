import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
// import { connect } from 'react-redux';

// import moment from 'moment';


import '../App.css';

import SearchBar from '../components/SearchBar';




// Import redux provider

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <SearchBar />

        </div>      
    </div>
    );
  }

}


export default Home;
