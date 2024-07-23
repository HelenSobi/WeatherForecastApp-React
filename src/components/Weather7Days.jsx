
import DateSplit from './DateSplit';

function Weather7Days(props) {
    const {conditions,datetime,icon,temp,tempmin,tempmax}=props;
  
  return (
    <>
   
     <div className=" flex flex-col rounded-lg shadow-lg bg-white text-surface sm:shrink-0 sm:grow sm:basis-0">
          <h3 className="rounded-t-lg date-heading p-3 text-center text-white">
            <DateSplit datetime={datetime}/></h3>
          <img src={`/src/assets/icons/${icon}.png`} alt={icon} className="mx-auto"/>
          <div className="px-5 pb-5">
           
            <h1>{temp}&deg;</h1>
              <p className="text-sm font-semibold tracking-tight text-gray-700">
               {conditions}
              </p>
            <p className="text-sm  text-gray-700">
            High :{tempmax}&deg;</p>
            <p className="text-sm  text-gray-700">
            Low : {tempmin}&deg;</p>
            
          </div>
        </div>
    </>
  );
}

export default Weather7Days;
