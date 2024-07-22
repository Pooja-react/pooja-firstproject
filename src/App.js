
import { useState } from 'react';
import './App.css';

function App() {

  // const [username,setUsername] =useState('')

  // const handleuserName = (event)=>{
  //   setUsername(event.target.value)
  // }
  // const handleBtnClick = ()=>{
  //   console.log("Button Clicked")
  //   console.log(username)
  // }
  // return (
  //   <>
  //     <h1>React App</h1>
  //     <input type='text' name='uname' onChange={handleuserName}/>
  //     <br/>
  //     <button onClick={handleBtnClick}>Click Me!!</button>

  //     <First name={username}/>
  //   </>
  // );

  const[firstnumber, SetfirstNumber] = useState('')
  const[secondnumber, SetsecondNumber] = useState('')
  const[result, setResult] = useState('')


  const firstNumber = (event)=>{
    SetfirstNumber(event.target.value)
  }

  const secondNumber = (event)=>{
    SetsecondNumber(event.target.value)
  }

  const addBtn = ()=>{
    setResult(firstnumber + secondnumber)
  }
  const subtractBtn = ()=>{
    setResult(firstnumber - secondnumber)
  }
  const multiplyBtn = ()=>{
    setResult(firstnumber * secondnumber)
  }
  const devideBtn = ()=>{
    setResult(firstnumber / secondnumber)
  }

  return (
    <>
      <input type='number' name='FirstNumber' onChange={firstNumber}></input>
      <input type='number' name='SecondNumber' onChange={secondNumber}></input><br/>
      <button onClick={addBtn}>Add</button><br/>
      <button onClick={subtractBtn}>Subtract</button><br/>
      <button onClick={multiplyBtn}>Multiply</button><br/>
      <button onClick={devideBtn}>Devide</button><br/>
      <h2>Ans: {result}</h2>
    </>
  );
}

export default App;
