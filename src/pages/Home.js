import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { Button} from 'react-bootstrap';

import * as actions from '../actions';



// import moment from 'moment';


import '../App.css';

import SearchBar from '../components/SearchBar';




// Import redux provider

class Home extends Component {

  logProps = () => {
    const { searchItem, cards, loading, error } = this.props
    console.log("woooot", this.props)
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar />
          <Button
            onClick={this.logProps}>
            Click Me
          </Button>
          


{/* Loading Widget goes here. */}

        </div>      
    </div>
    );
  }

}

const mapStateToProps = ({ searchReducer }) => {
  const { searchItem, cards, loading, error } = searchReducer
  return { searchItem, cards, loading, error }
}

export default connect(mapStateToProps, actions)(Home);
