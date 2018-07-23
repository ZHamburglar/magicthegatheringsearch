import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

// import { makeData } from "./Utils";
import * as actions from '../actions';

import namor from "namor";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    firstName: namor.generate({ words: 2, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 })
  };
};

export function makeData(len = 555) {
    console.log("making data")
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

class CardSearchTable extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  componentDidMount(){
      this.setCardTable();
  }

  setCardTable(){
      console.log("setting card table", this.props.cards)

  }



  render() {
    const { cards } = this.props;
    console.log("these props", this.props, cards)

    return (
      <div>
        <ReactTable
          data={cards}
          columns={[
            {
              Header: "Card List",
              columns: [
                {
                  Header: "Card Name",
                  accessor: "name"
                },
                {
                  Header: "Rarity",
                  accessor: "rarity"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "name",
              desc: false
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => {
    const { cards } = searchReducer
    return { cards }
  }

export default connect(mapStateToProps, actions)(CardSearchTable);