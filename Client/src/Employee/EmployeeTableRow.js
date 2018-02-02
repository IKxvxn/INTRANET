import React from 'react'
import PropTypes from 'prop-types';

const EmployeeTableRow = (props) => {

    return (
        props.employees.map(function(employee) {            
            return(
                <tr key={employee.id} className="rowText-Format">
                    <td>{employee.Name}</td>
                    <td>{employee.Phone}</td>
                    <td>{employee.Extension}</td>
                    <td>{employee.PersonalEmail}</td>
                    <td>{employee.CompanyEmail}</td>
                    <td><button className="btn btn-sm btn-circle fa  fa-pencil " />  <button className="btn btn-sm btn-circle fa fa-trash  " /> </td>
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