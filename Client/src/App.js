import React from 'react'
import 'font-awesome/css/font-awesome.css'
import DepartmentContainer from'./Department/DepartmentContainer'
import EmployeeContainer from'./Employee/EmployeeContainer'
import TopBar from './Bars/TopBar'
import './css/general.css'

import './css/bootstrap.css'

const App = () => {

    return (
      <div className="default-Wrap ">
        <TopBar />
        <div className="container-fluid">
          <div className="row">
            <DepartmentContainer />
            <EmployeeContainer />
          </div>
        </div>
      </div>
  
    );
}


export default App