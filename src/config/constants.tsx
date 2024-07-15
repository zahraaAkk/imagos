


export const ENV = process.env.REACT_APP_ENV;
export const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const CLOUD9_API = ENV == "development" ? "http://localhost:9900" : "https://api.gain-intel.com/api";
