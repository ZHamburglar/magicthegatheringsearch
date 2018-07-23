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


class CardSearchTable extends Component {
  constructor() {
    super();
    this.state = {
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
                },
                {
                    Header: "Status",
                    Cell: (row) => {
                        console.log("huh", row.original.imageUrl)
                      return <div><img height={50} src={row.original.imageUrl}/></div>
                    },
                  id: "status"
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