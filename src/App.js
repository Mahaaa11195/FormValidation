
import { useState } from 'react';
import './App.css';
import Add from './components/Add/Add';
import Delete from './components/Delete/Delete';
import Display from './components/Display/Display';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

// const [empDetails, setemDetails] = useState([])
// const [registerData, setregisterData] = useState({})
// const [loginData, setloginData] = useState({})
// const [data, setdata] = useState({
//   empDetails,setemDetails,
//   registerData, setregisterData,
//   loginData, setloginData
// })


  return (
    <div className="App">
     <Login />
     <Register/>
    </div>
  );
}

export default App;
