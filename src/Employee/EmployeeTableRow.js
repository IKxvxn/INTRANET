import React from 'react'
import PropTypes from 'prop-types';

const EmployeeTableRow = (props) => {

    return (
        props.employees.map(function(employee) {
            return(
                <tr key={employee.Key}>
                    <th>{employee.Name}</th>
                    <th>{employee.Phone}</th>
                    <th>{employee.Extension}</th>
                    <th>{employee.PersonalEmail}</th>
                    <th>{employee.CompanyEmail}</th>
                </tr>
                )
            }
        )        
    );
}

EmployeeTableRow.propTypes = {
    employees:PropTypes.array
  }
EmployeeTableRow.defaultProps = {
    employees:[]
  }


export default EmployeeTableRow