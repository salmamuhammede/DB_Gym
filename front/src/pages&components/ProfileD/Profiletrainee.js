import React, { useState, useEffect } from 'react';
import axios from'axios'
import './Profile.css'
import { Link } from 'react-router-dom';
import sql from '../assets/sql.png'
import Trainernavbar from './Trainernavbar';
import trainer from '../assets/trainer.png'
import gymtrainer from '../assets/gymtrainer.jpeg'
const Profiletrainee =()=>
{  
   const [Fname, setFName] = useState("");
   const [Mname, setMName] = useState("");
   const [Lname, setLName] = useState("");
     const [email, setEmail] = useState("");
      const [phoneNumber, setphoneNumber] = useState(0);
      const [birthdate, setbirthdate] = useState("");
      const [address, setaddress] = useState("");
     const [Gender, setGender] = useState("");
     const [BloodType, setBloodType] = useState("");
   const [SID, setSID] = useState(0);
    
     


     const fetchData = async () => {
      try {
          const response = await axios({
              method: "get",
              url: "http://localhost:8082/trainee/profile",
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
              },

          })          
         
          let ob = response.data;


          setFName(ob.FName);
          setMName(ob.MName);
          setLName(ob.LName);
          setEmail(ob.Email);
          setphoneNumber(ob.Phone);
          setGender(ob.Gender);
          setbirthdate(ob.BIrthDate);
          setBloodType(ob.BloodType);
          setSID(ob.SID);
          setaddress(ob.Address);
          


      }
      catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
      fetchData();
  });
  
  const getValueStyle = (gender) => {
    return {
      color: gender === 'Female' ? 'red' : gender === 'Male' ? 'blue' : 'inherit',
    };
  };
return (

    <div className="main-profile">
  <Trainernavbar/>      
 <div className="sql">
<img src={sql} className="sqlimage"/>
</div> 

<div className='profile_bg_down'>
<div className="carveddiv">
  <div className='trainer'>
<img src={gymtrainer} alt="gymtrainer" className="gymtrainer" />
</div>
<p className='type'>Gender:</p>
<p className='value' style={getValueStyle(Gender)}>{Gender}</p>
<br/>
<p className='type'>Email:</p>
<p className='value' >{email}</p>
<br/>

<p className='type'>Phone Number:</p>
<p className='value' >{phoneNumber}</p>
<br/>
<p className='type'>Birthdate:</p>
<p className='value' >{birthdate.substring(0,10)}</p>
<br/>
<p className='type'>Address:</p>
<p className='value'>{address}</p>
<br/>

<p className='type'>BloodType:</p>
<p className='value'>{BloodType}</p>
<br/>
<p className='type'>Monitor Id:</p>
<p className='value'>{SID}</p>
<br/>
</div>
<h1>{Fname+" "+Mname+" "+Lname}</h1>
</div>


{/* 
    {/* <div className="trainer">
<img src={trainer} className="trainerimg"/>
</div> 
</div>
<div className='container'>
<div className="textContainer">
      <h1 className="coloredText">
        <span className="blackText">ahmad</span>
        <span className="yellowText"> ashraf</span>
        <span className="blackText"> alaa</span>
        
      </h1>
    </div>
    <h1 className="coloredText2">
    <span className='whitetext'>GYM TRAINER</span>
    </h1>
    </div> */}
    </div>
);
};
export default Profiletrainee;