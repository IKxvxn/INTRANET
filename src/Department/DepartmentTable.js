import React from 'react'
import PropTypes from 'prop-types';
import DepartmentTableRow from'./DepartmentTableRow'


const DepartmentTable = (props) => {

    return (
      <div>
        <table className="table table-condensed table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <DepartmentTableRow departments={props.departments} />
          </tbody>
        </table>
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