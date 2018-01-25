
import React, { Component } from 'react';
import EmployeeTable from'./EmployeeTable'

//const uuid = require('uuid/v1')

class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount(){
    fetch('http://localhost:3000/Employees').then((data) => {
        //console.log(data)
        return data.json()
      }).then((employee) => {
        this.setState({employees:employee })
      })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Employees</h1>
        </div>
        <div>
          <EmployeeTable employees={this.state.employees} />
        </div>
      </div>
    );
  }


}

export default EmployeeContainer;