import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather7Days from './Weather7Days';
import Header from './Header';

function HeroWeather(){
    const [posts, setPosts] = useState([]);
    const [city, setCity] =useState("Dubai");
    const [datess, setdatess] = useState(0);

    useEffect(() => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next6days?unitGroup=metric&include=days&key=FJHXAEHVRDDMGTT74KBL5G9TM&contentType=json`)
          .then(response => {
            setPosts(response.data.days);
            //console.log(posts[0].temp)
          })
          .catch(error => {
            alert("Enter the valid city / country");
          });
          updateDate()
      }, [city]);
      function handleClick(val){
        setCity(val);
      }
      function updateDate(){ 
        const currDate = new Date();
      const dd=currDate.getDate();
      var month = currDate.getMonth();
      var day = currDate.getDay();
      const dateArray=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satday"];
      const monthArray=["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug", "Sep", "Oct", "Nov", "Dec"];
        setdatess(dd +" " +monthArray[month] +" , " +dateArray[day]);
      }
     
    return (
        <>
         <div className="container m-5 w-[95%] mx-auto">
             <div className="m-10 py-5"> 
                <Header handleClick={handleClick}/>
                <div className="flex items-center justify-center flex-col">
                <h2 className="font-extrabold text-2xl">{city}</h2>
                {/* <img src={`/src/assets/icons/${inputCityData.icon}.png`} alt={inputCityData.icon} className=""/> */}
                   <p>{datess}</p>
                     <p>temp</p>
                    {/* <p>Using Celcius.  Switch to ºF</p> */}
                    <p>H : tempmax&deg; L : tempmin&deg;</p>
                    {/* {'\u00b0'}  --- degree*/}
                </div>
                  
                 <div className="sm:flex sm:justify-center flex-wrap m-4 gap-2">
                 {
                 posts.length > 0 ? posts.map((post,index) => {
                    return (
                        <Weather7Days key={index} conditions={post.conditions} datetime={post.datetime}
                        icon={post.icon} temp={post.temp} tempmin={post.tempmin} tempmax={post.tempmax} />
                    )}) : <h1>Loading</h1>
                }
               </div>
               
               
        </div>
        </div>
        </>
    )
}

export default HeroWeather