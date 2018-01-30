import React from 'react'
import DepartmentContainer from'./Department/DepartmentContainer'
import EmployeeContainer from'./Employee/EmployeeContainer'

require('./Style/bootstrap.css');

const App = () => {

    return (
      <div>
        <div className="App container-fluid">
          <DepartmentContainer />
          <EmployeeContainer />
        </div>
      </div>
    );
}


export default App