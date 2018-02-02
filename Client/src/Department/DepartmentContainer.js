
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as Actions from './DepartmentActions'
import DepartmentTable from'./DepartmentTable'

import '../css/department.css'


class DepartmentContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getDepa()
  }

  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 ">
              <span>Departments</span>
            </h6>
            <DepartmentTable departments={this.props.departments} />
        </div>
      </nav>
    );
  }

}

DepartmentContainer.propTypes = {
  departments:PropTypes.array,
  getDepa: PropTypes.func
}
DepartmentContainer.defaultProps = {
  departments:[],
  getDepa: () => {}
}

function mapStateToProps(state) {
  return {
    departments: state.departments.departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDepa: ()  => dispatch(Actions.getDepa())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentContainer)