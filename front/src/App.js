import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import './App.css';
import StaffLogin from './pages&components/Login/LoginStaff';
import Profile from './pages&components/ProfileD/Profile'
import PrintPdf from './pages&components/ProfileD/Printid'
import Login from './pages&components/Login/Login';
import Home from '../src/pages&components/home copy/Home'

function App() {
  return (
    <Router>
    <div className="App">
    <div className="content">
          <Routes><Route exact path='/' element={<Home/>} /> 
          <Route  path='/TrainerProfile' element={<Profile/>} />    
          <Route  path='/TrainerPrint' element={<PrintPdf/>} />  
          <Route  path='/TraineeLogin' element={<Login/>} />  
          <Route  path='/StaffLogin' element={<StaffLogin/>} />  
         
            
            

          </Routes>
        </div>
        
     
    </div>
    </Router>
  );
}

export default App;
