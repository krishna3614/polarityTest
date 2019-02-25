import React, { Component } from 'react';

class Tabletemplate extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.username}
          </td>
          <td>
            {this.props.obj.hobbies}
          </td>
          <td>
            <img alt="profile-image" src={this.props.obj.avatar} style = {{width : 100 +'px', height : 100 +'px'}} />
          </td>
        </tr>
    );
  }
}

export default Tabletemplate;