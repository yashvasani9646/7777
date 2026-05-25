
// import { useDispatch, useSelector, } from 'react-redux'

import Dropdwon from "./Dropdown/Dropdwon"
import Validation from "./YupLibrary/Validation"
import Yup from "./YupLibrary/Yup"

// import Pratice from "./Demo-practice/Pratice"
// import Calculater from "./Demo-practice/Calculater"
// import Cataogery from "./Demo-practice/Cataogery"
// import Crudyou from "./Demo-practice/Crudyou"
// import Formdata from "./Demo-practice/Formdata"
// import Reduce from "./Demo-practice/Reduce"
// import SecondCrude from "./Demo-practice/SecondCrude"
// import UnemployeList from "./Demo-practice/UnemployeList"
// import { Chart } from "chart.js"
// import PieChart from "./Demo-practice/Chart"
// // import Calculater2 from "./Demo-practice/Calculater2"

// // import './App.css'
// // import { decrement, increment, reset,incrementbyAmount } from './counterSlice';
// // import { useState } from 'react';
// import Form from './CustomeHook/Form';
// import Input from "./CustomeHook/Input"
// import Aggridtable from "./Aggrid table/Aggridtable"
// import MapTask from "./MapTask"
// import DataCount from "./Zustand/DataCount";
// import ThemeToggle from "./Darkmode/ThemeToggle"
// // import { DataStore } from './Zustand/DataStore';
// import CrudData from "./CrudwithRedux/CrudData";
// import Api from "./API/Api"

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch()
  // const [num,setNum]= useState(5);

  // function handelincreament() {
  //   dispatch(increment());
  // }

  // function handeldecrement() {
  //   dispatch(decrement());
  // }


  // function handelreset() {
  //   dispatch(reset());
  // }
  return (
    <div>
      {/* <button onClick={()=>dispatch(increment())}>+</button>
      <p>Count:{count}</p>
      <button onClick={()=>dispatch(decrement())}>-</button><br />

      <button onClick={()=>dispatch(reset())}>Reset</button><br />      
      <input type='number'onChange={(e)=>{setNum(e.target.value)}} value={num}/>
      <button onClick={()=>dispatch(incrementbyAmount(Number(num)))}>data</button> */}


      {/* <Reduce/><br/><br/><br/> */}
      {/* <Formdata/> */}
      {/* <UnemployeList/> */}
      {/* <Crudyou/> */}
      {/* <SecondCrude/> */}




      {/* <Calculater/> */}
      {/* <Calculater2/> */}

      {/* <Pratice /> */}
      {/* <PieChart/> */}
      {/* <Form /> */}
      {/* <Input /> */}
      {/* <Aggridtable/> */}
      {/* <MapTask/> */}
      {/* <DataCount/> */}
      {/* <ThemeToggle/> */}
      {/* <CrudData/> */}
      {/* <Api/> */}
      {/* <Dropdwon/> */}

      <Yup />
      <Validation/>
    </div>

  )
}

export default App

