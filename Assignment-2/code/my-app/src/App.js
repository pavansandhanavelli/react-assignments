import logo from './logo.svg';
import './App.css';

function App(props) {
 const {employee}=props;
 const { name, age, location, bloodGroup, profileImg}=props.employee;
return(
  <div className="container">
  {/* Start your React code here */}
  <div className='details'>
  <img className="img" src={profileImg} alt="img"></img>
  
  <div className="data">
    <h1>{name}</h1>
    <p>Location</p>
    <h2>{location}</h2>
    <p>BloodGroup</p>
    <h2>{bloodGroup}</h2>
    <p>Age</p>
    <h2>{age}</h2>
    </div>
  </div>
  </div>
)
}
export default App;
