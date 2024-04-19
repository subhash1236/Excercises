// utils/featchData.js
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ca80c886abmshca98a6de44e8941p179d79jsnd39b82dfef2d', // Corrected the environment variable
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  