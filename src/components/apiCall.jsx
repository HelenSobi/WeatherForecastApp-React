import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function apicall() {
    const[state,setState]=useState([]);
    async function apicall(){
         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        //  console.log(response.data);
         setState(response.data);
    }
//     const[state,setState]=useState([]);
//     function apicall(){
//         axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{setState(response.data)})
//         .then((data)=>{console.log(data)});
//    console.log(state);
   
//     }



    useEffect(()=>{
        apicall();
    },[])
  return (
    <>
    <h1 className='userheading'> User information</h1>
    {
        
        state.length>0?state.map((data)=>{return(
            <div className='card'>
            <ul className='listcard'>
            <li className='listitem'>Id: {data.id}</li>
            <li className='listitem'>Name: {data.name}</li>
            <li className='listitem'>Username: {data.username}</li>
            <li className='listitem'>Email: {data.email}</li></ul>
            </div>
        )}):<h1>loading</h1>
     }
    </>
  )
}

export default apicall

//Change temperature

function GradConverter(){
  const [temp, updateTemp] = React.useState({ f: 0, c: 0 })

  const updateC = ev => updateTemp({
    c: ev.target.value,
    f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
  })
  
  const updateF = ev => updateTemp({
    c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
    f: ev.target.value
  })

  return(
    <div id="container">
      <div id="box1">
        <h1>Celsius</h1>
        <input
            type = "number"
            value = {temp.c}
            onChange = {updateC} >
          </input>
      </div>
      <div id="box2">
          <h1>Fahrenheit</h1>
          <input
            type = "number" 
            value = {temp.f} 
            onChange = {updateF}>
          </input>
          </div>
    </div>
  )
}