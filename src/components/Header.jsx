import {useState} from 'react';

function Header({handleClick}){
    const [inputVal,setinputVal] = useState("");

    function inputFun(e){
        const val = e.target.value;
        setinputVal(val);
    }

    return (
        <>
        <div>
            <h1 className="py-4 text-center text-2xl font-extrabold text-gray-900  md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Weather Forecast</h1>      
            <p className="text-center text-slate-500">(Using visualcrossing API)</p>
        </div>
        <div>

<form className="max-w-lg mx-auto">
    <div className="flex m-4">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        
        <div className="relative w-full">
            <input type="search" onChange={inputFun} value={inputVal} id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter the City..." required />
            <button onClick={(e) => {
                        e.preventDefault();
                        handleClick(inputVal);
                        setinputVal("");
                    
                    }}type="submit" className=" absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg bg-gradient-to-r from-cyan-500
 to-blue-500 hover:bg-gradient-to-bl   focus:ring-cyan-300">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

        </div>       
        

        </>
    )
}

export default Header;