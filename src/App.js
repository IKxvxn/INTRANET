import React from 'react'
import DepartmentContainer from'./Department/DepartmentContainer'
import EmployeeContainer from'./Employee/EmployeeContainer'

require('./Style/bootstrap.css');

const App = () => {

    return (
      <div className="App container-fluid">
        <DepartmentContainer />
        <EmployeeContainer />
      </div>
    );
}


export default App