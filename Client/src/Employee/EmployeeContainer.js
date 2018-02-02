
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as Actions from './EmployeeActions'
import EmployeeTable from'./EmployeeTable'

import '../css/employee.css'


class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getEmpl()
  }

  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <EmployeeTable employees={this.props.employees} />
      </main>
    );
  }


}

EmployeeContainer.propTypes = {
  employees:PropTypes.array,
  getEmpl: PropTypes.func
}
EmployeeContainer.defaultProps = {
  employees:[],
  getEmpl: () => {}
}

function mapStateToProps(state) {
  return {
    employees: state.employees.employees
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEmpl: ()  => dispatch(Actions.getEmpl())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)
