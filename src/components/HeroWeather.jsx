import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather7Days from './Weather7Days';
import Header from './Header';
import Loading from './Loading';
import DateSplit from './DateSplit';

function HeroWeather(){
    const [posts, setPosts] = useState([]);
    const [currentWeth, setCurrentWeth] = useState([]);
    const [city, setCity] =useState("Dubai");
    const [datess, setdatess] = useState(0);

    useEffect(() => {
      axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next6days?unitGroup=metric&include=days&key=FJHXAEHVRDDMGTT74KBL5G9TM&contentType=json`)
        .then(response => {
          setPosts(response?.data?.days);
          setCurrentWeth(response?.data?.days[0])
        })
        .catch(error => {
          alert("Enter Valid City / Country")
          console.error(error);
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
        const dateArray=["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
        const monthArray=["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug", "Sep", "Oct", "Nov", "Dec"];
        setdatess(`${dateArray[day]} , ${monthArray[month]} ${dd}`);
      }
     
    return (
        <>
        <Header handleClick={handleClick}/>
        <div className="flex justify-evenly md:flex-row flex-col flex-wrap m-10">
          <div className="">
          <h1 className="text-slate-200 text-sm uppercase mb-2">Current Weather </h1>
          <div className="bg-transp rounded-xl p-3">
            
              <div className="flex flex-row">
                <div><p className="p-3 uppercase">{city}</p>
                <p className="">{datess}
                 </p></div>
                
                <div> <p className="p-3">{currentWeth.temp} &deg;C</p>
                </div>
               <div>
              
               </div>
              </div>
              <img src={`./iconsSvg/${currentWeth.icon}.svg`} alt={currentWeth.icon} className="mx-auto w-24"/>
            </div>
            
              <h1 className="text-slate-200 text-sm uppercase  my-2">Air Conditions</h1>
              <div className="bg-transp rounded-xl p-3">
              
                <div className="flex flex-row">
                <div> <p className="p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0be9f2" className="inline-block " viewBox="0 0 16 16">
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
              </svg>
              <span className="pl-1 text-sm ">Wind</span>
                </p>
                <p className="p-3"> {currentWeth.windspeed} m/h</p></div>
                  <div> <p className="p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0be9f2" className="inline-block" viewBox="0 0 16 16">
                    <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267"/>
                    </svg>
                    <span className="pl-1 text-sm ">Humidity</span>
                    
                  </p>
                  <p className="p-3">{currentWeth.humidity} %</p></div>
                  <div> <p className="p-3">
                  <span className="pl-1 text-sm ">Conditions</span></p>
                  <p className="p-3">{currentWeth.conditions}</p></div>
                </div>
                </div>
          </div>
          <div className="">
            <h1 className="text-slate-200 text-sm font-medium text-center uppercase mb-2">Weekly Forecast</h1>
            {
                 posts.length > 0 ? posts.map((post,index) => {
                    return (
                        <Weather7Days key={index} conditions={post.conditions} datetime={post.datetime}
                        icon={post.icon} temp={post.temp} windspeed={post.windspeed} humidity={post.humidity} />
                    )}) : <Loading/>
                }
            </div>
        </div>
                
        </>
    )
}

export default HeroWeather;