import {useState, useEffect} from 'react';

function DateSplit({datetime}){
    const [datess, setdatess] = useState(0);
    const d=datetime;
    var arr1=d.split('-');
   const dd=arr1[2];
   const month=arr1[1];
   const monthNo=month[1];
      const monthArray=["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug", "Sep", "Oct", "Nov", "Dec"];   
      function updateDate(){ 
        setdatess(monthArray[monthNo] +" "+dd);
      }
    useEffect(() => {
        updateDate()
      }, []);
      return (
        <>
        <span>{datess}</span>
        </>
      )
}

export default DateSplit;