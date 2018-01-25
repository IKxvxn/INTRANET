
import React, { Component } from 'react';
import DepartmentTable from'./DepartmentTable'

//const uuid = require('uuid/v1')

class DepartmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
    };
  }

  componentDidMount(){
    fetch('http://localhost:3000/Departments').then((data) => {
        //console.log(data)
        return data.json()
      }).then((department) => {
        this.setState({departments:department })
      })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Departments</h1>
        </div>
        <div>
          <DepartmentTable departments={this.state.departments} />
        </div>
      </div>
    );
  }


}

export default DepartmentContainer;