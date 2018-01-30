
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as Actions from './DepartmentActions'
import DepartmentTable from'./DepartmentTable'


class DepartmentContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    fetch('http://localhost:3000/Departments').then((data) => {
        return data.json()
      }).then((department) => {
        this.props.loadDepa(department)
      })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Departments</h1>
        </div>
        <div>
          <DepartmentTable departments={this.props.Department} />
        </div>
      </div>
    );
  }


}

DepartmentContainer.propTypes = {
  Department:PropTypes.array,
  loadDepa: PropTypes.func
}
DepartmentContainer.defaultProps = {
  Department:[],
  loadDepa: () => {}
}

function mapStateToProps(state) {
  return {
    Department: state.departments.Department
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadDepa: path => dispatch(Actions.loadDepa(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentContainer)