import { useState,useEffect } from 'react'
import axios from 'axios'
function WeatherAPI({city}) {
    const [posts, setPosts] = useState([]);
    const [city, setCity] =useState("Dubai");

    useEffect(() => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next6days?unitGroup=metric&include=days&key=FJHXAEHVRDDMGTT74KBL5G9TM&contentType=json`)
          .then(response => {
            setPosts(response.data.days);
           
          })
          .catch(error => {
            console.error(error);
          });
          updateDate()
      }, []);
}