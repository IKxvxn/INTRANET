import React from 'react'
import PropTypes from 'prop-types';

const DepartmentTableRow = (props) => {

    return (
        props.departments.map(function(department) {
            return(
                <li className="nav-item" key={department.id}>
                    <a className="nav-link" href="/#">{department.Name}</a>
                </li>
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