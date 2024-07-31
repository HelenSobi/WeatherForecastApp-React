export const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
export const API_KEY = import.meta.env.VITE_API_KEY;
export const REM_URL = `/next6days?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;