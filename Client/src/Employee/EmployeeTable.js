import React from 'react'
import PropTypes from 'prop-types';
import EmployeeTableRow from'./EmployeeTableRow'


const EmployeeTable = (props) => {

    return (
      <div>
        <table className="table  table-hover table-sm">
          <thead className="table-heading ">
            <tr>
              <td>Name</td>
              <td>Personal Phone</td>
              <td>Extension</td>
              <td>Personal Email</td>
              <td>Company Email</td>
              <td>Options</td>
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