import React from 'react'
import DepartmentContainer from'./Components/Department/DepartmentContainer'
import EmployeeContainer from'./Components/Employee/EmployeeContainer'
import NavBar from'./Components/NavBar/NavBar'

require('./Style/bootstrap.css');

const App = () => {

    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="App container-fluid">
          
          <DepartmentContainer />
          <EmployeeContainer />
        </div>
      </div>
    );
}


export default App