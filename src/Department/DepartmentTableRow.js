import React from 'react'
import PropTypes from 'prop-types';

const DepartmentTableRow = (props) => {

    return (
        props.departments.map(function(department) {
            return(
                <tr key={department.Key}>
                    <th>{department.Name}</th>
                </tr>
                )
            }
        )        
    );
}

DepartmentTableRow.propTypes = {
    departments:PropTypes.array
  }
DepartmentTableRow.defaultProps = {
    departments:[]
  }


export default DepartmentTableRow