import { Link } from "react-router-dom";
import './Trainernavbar.css'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'

const Trainernavbar = () => {
  return (
    <nav className="navbar">
    <div className='logo'>
      <img src={logo} alt="logoimg" className="logoimg" />
    </div>
    <div className="links">
  <div></div>
  <Link to="/Profiletrainee" >Profile</Link>
 
  <Link to="/TrainerPrint">View Schedule</Link>
  <Link to="/TrainerPrint">View Nutration program</Link>
  <div></div>
</div>
</nav>
  );
}

export default Trainernavbar;