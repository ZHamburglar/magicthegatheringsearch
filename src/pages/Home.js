import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { Button} from 'react-bootstrap';

import * as actions from '../actions';



// import moment from 'moment';


import '../App.css';

import SearchBar from '../components/SearchBar';
import CardSearchTable from '../components/CardSearchTable';




// Import redux provider

class Home extends Component {

  logProps = () => {
    const { searchItem, cards, loading, error } = this.props
    console.log("woooot", this.props)
  }

  renderCardTable() {
    console.log("this works here", this.props.cards.length)
    if (this.props.cards.length > 0){
      return (
        <CardSearchTable />
      )
    } else if (this.props.loading == true){
      return (
        <div> LOADING LOADING LOADING</div>
      )
    }
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
          {this.renderCardTable()}

          

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
