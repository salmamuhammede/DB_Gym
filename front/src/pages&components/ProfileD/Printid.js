import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
 import { useReactToPrint } from 'react-to-print';
import './Printid.css';
 import axios from 'axios'
 import idbg from '../assets/bg-id.png'
 import trainer from '../assets/trainer.png'
 import gymtrainer from '../assets/gymtrainer.jpeg'
const Printid = () => {
    const trainerData = {
        name: 'ahmad ashraf alaa',
        email: 'john@example.com',
        phoneNumber: '+1234567890',
        birthdate: 'January 1, 1980',
        address: '123 Trainer Street, City',
        gender: 'Male',
        startDate: 'January 1, 2020',
        experienceYears: '5 years',
        specializations: 'Weightlifting, Cardio',
        salary: '$50,000',
        TId:'123',
      };
    return (
        <div className='ID'>
        
        <div className="idtrainer">
<img src={gymtrainer} className="idtrainerimg"/>
</div>
<div className='centereddivid'>
        <p >Name:{trainerData.name}</p>
        <p >Designation:GYM Trainer</p>
        <p >TrainerID:{trainerData.TId}</p>
      </div>
      <div className='centereddivid2'>
        <p >Address:{trainerData.address} </p>
        <p>Call:{trainerData.phoneNumber} </p> 
        <p>Email:{trainerData.email}</p>

      </div>
        </div>
    );
}

function PrintPdf() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'TrainerID',
        onAfterPrint: () => console.log('Printed PDF successfully!'),
    });
    return (
        <>
            <div
                className="pass-title"
                ref={componentRef}
                style={{ width: '100%', height: window.innerHeight }}
            >
                {Printid()}
            </div>
            <br />
            <button className="Print" onClick={handlePrint}>Print or Download PDF</button>
        </>);
}


export default PrintPdf;
