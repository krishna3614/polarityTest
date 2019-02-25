import React, { Component } from 'react';
import axios from 'axios';
import Tabletemplate from './tableTemplate';

export default class View extends Component {

  constructor(props) {
      super(props);
      this.state = {userdata: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/user')
        .then(response => {
          this.setState({ userdata: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    rowdat(){
      return this.state.userdata.map(function(object, i){
          return <Tabletemplate obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Users List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Hobbies</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              { this.rowdat() }
            </tbody>
          </table>
        </div>
      );
    }
  }