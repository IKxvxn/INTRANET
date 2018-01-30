
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as Actions from './EmployeeActions'
import EmployeeTable from'./EmployeeTable'


class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    fetch('http://localhost:3000/Employees').then((data) => {
        //console.log(data)
        return data.json()
      }).then((employee) => {
        this.setState(this.props.loadEmpl(employee))
      })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Employees</h1>
        </div>
        <div>
          <EmployeeTable employees={this.props.Employee} />
        </div>
      </div>
    );
  }


}

EmployeeContainer.propTypes = {
  Employee:PropTypes.array,
  loadEmpl: PropTypes.func
}
EmployeeContainer.defaultProps = {
  Employee:[],
  loadEmpl: () => {}
}

function mapStateToProps(state) {
  return {
    Employee: state.employees.Employee
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadEmpl: path => dispatch(Actions.loadEmpl(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)
