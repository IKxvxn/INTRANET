import React from 'react'
import PropTypes from 'prop-types';
import DepartmentTableRow from'./DepartmentTableRow'


const DepartmentTable = (props) => {

    return (
      <div>
        <ul className="nav flex-column mb-2">
          <DepartmentTableRow departments={props.departments} />
        </ul>
      </div>
    );
}

DepartmentTable.propTypes = {
  departments:PropTypes.array
}
DepartmentTable.defaultProps = {
  departments:[]
}


export default DepartmentTable