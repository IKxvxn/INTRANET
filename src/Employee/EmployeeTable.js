import React from 'react'
import PropTypes from 'prop-types';
import EmployeeTableRow from'./EmployeeTableRow'


const EmployeeTable = (props) => {

    return (
      <div>
        <table className="table table-striped table-hover table-condensed table-responsive">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Personal Phone</th>
              <th>Extension</th>
              <th>Personal Email</th>
              <th>Company Email</th>
            </tr>
          </thead>
          <tbody>
            <EmployeeTableRow employees={props.employees} />
          </tbody>
        </table>
      </div>
    );
}

EmployeeTable.propTypes = {
  employees:PropTypes.array
}
EmployeeTable.defaultProps = {
  employees:[]
}


export default EmployeeTable