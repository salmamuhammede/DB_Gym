import React, { useState, useEffect } from 'react';
import axios from'axios'
import './Profile.css'
import { Link } from 'react-router-dom';
import sql from '../assets/sql.png'
import Trainernavbar from './Trainernavbar';
import trainer from '../assets/trainer.png'
import gymtrainer from '../assets/gymtrainer.jpeg'
const Profile =()=>
{
  
 
  /*const trainerData = {
   
    
    name: 'AYA MOHAMED ALI',
    email: 'john@example.com',
    phoneNumber: '+1234567890',
    birthdate: 'January 1, 1980',
    address: '123 Trainer Street, City',
    gender: 'Female',
    startDate: 'January 1, 2020',
    experienceYears: '5 years',
    specializations: 'Weightlifting, Cardio',
    salary: '$50,000',
  };*/
   const [name, setName] = useState("");
     const [email, setEmail] = useState("");
      const [phoneNumber, setphoneNumber] = useState(0);
      const [birthdate, setbirthdate] = useState("");
      const [address, setaddress] = useState("");
     const [Gender, setGender] = useState("");
     const [startDate, setstartDate] = useState("");
   const [experienceYears, setexperienceYear] = useState("");
     const [specializations, setspecialization] = useState([]);
     const [salary, setsalary] = useState(0);


     const fetchData = async () => {
      try {
          const response = await axios({
              method: "get",
              url: "http://localhost:8082/trainer/profile",
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
              },

          })
          const response2=  await axios({
            method: "get",
            url: "http://localhost:8082/trainer/specializations",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },

        })
          console.log(response.data);
          let ob = response.data;


          setName(ob.FName);
          setEmail(ob.Email);
          setphoneNumber(ob.PhoneNumber);
          setGender(ob.Gender);
          setbirthdate(ob.BirthDate);
          setsalary(ob.Salary);
          setexperienceYear(ob.EXP_Years);
          setstartDate(ob.StartDate);
          setaddress(ob.Address);
          setspecialization(response2.data);


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

<p className='type'>phoneNumber:</p>
<p className='value' >{phoneNumber}</p>
<br/>
<p className='type'>Birthdate:</p>
<p className='value' >{birthdate}</p>
<br/>
<p className='type'>Address:</p>
<p className='value'>{address}</p>
<br/>

<p className='type'>startDate:</p>
<p className='value'>{startDate}</p>
<br/>
<p className='type'>experienceYears:</p>
<p className='value'>{experienceYears}</p>
<br/>
<p className='type'>Specializations:</p>

{specializations.map((element) => {
  return (
    <div>
    <p className='value'>{element["Nme"]}</p><br/>
    </div>
  );
})}

<p className='type'>Salary:</p>
<p className='value'>{salary}</p>
</div>

<h1>{name}</h1>

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
export default Profile;