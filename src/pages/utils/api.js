import axios from 'axios';

export const getCountries = async (searchTerm) => {
  const baseUrl = 'https://restcountries.com/v3.1';
  let url = `${baseUrl}/all`;

  if (searchTerm) {
    url = `${baseUrl}/name/${searchTerm}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("No countries found."); 
    }
    throw new Error("An error occurred while fetching countries.");
  }
};