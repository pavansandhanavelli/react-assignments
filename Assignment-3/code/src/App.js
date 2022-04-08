import React from 'react';
import './App.css';
var arrow="<"
var arrow1=">"
function App() {
  const employee={
    name: "Alan Ford",
    Id:"00005152",
    Appointment:"9:00 (04-04-2022)",
    email:"alenford@gmail.com",
    Phone:"+31123456789",
    status:"In Progress",
    door:"Mark",
    time:"10:30(04-04-2022)",
    profileImg:'https://www.w3schools.com/howto/img_avatar.png',
    role:"Boltaart Bosbessen",
    summary:"Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkorf."
  };
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='main_container'>
      <p id='main_arrow'>{arrow}</p>
      <div className='employee_name'>
      <p className='span1'>{employee.name}</p>
        <span className='span2'>{employee.Id}</span>
        </div>

      <button className='btn'>Print</button>
    </div>
    <div className='details'>
      <EmployeeDetails1 Appointment={employee.Appointment} email={employee.email} Phone={employee.Phone}/> 
    </div>
      <EmployeeDetails2  details={employee.status} Door={employee.door} Time={employee.time}/>
      
    <div className='list'>
      <div className='check_box'></div>
        <img src={employee.profileImg} alt='image'></img>
      

      <div className='side_text'>
        <div className='employee_role'>{employee.role}</div>
        <div className='employee_summary'>{employee.summary}</div>
        <p id='arrow1'>{arrow1}</p>
      </div>
    </div>
    </div>
  );
}
const EmployeeDetails1=(props)=>{
  return (
    <div className='employeebott'>
      <div className='employee_details_bott'><span className='bold'>{"Appointment :"}</span>{props.Appointment}</div>
      <div className='employee_details_bott'><span className='bold'>{"email :"}</span>{props.email}</div>
      <div className='employee_details_bott'><span className='bold'>{"Phone "}</span>{props.Phone}</div>
    </div>
  )
}
const EmployeeDetails2=(props)=>{
  return (
    <div className='order'>
      <div className='employee_details_bott2'><span className='bold1'>{'Status'}</span><br/><li>{props.details}</li></div>
      <div className='employee_details_bott2'><span className='bold1'>{'Door'}</span><br/>{props.Door}</div>
      <div className='employee_details_bott2'><span className='bold1'>{'Time'}</span><br/>{props.Time}</div>
    </div>
  )
}
export default App;