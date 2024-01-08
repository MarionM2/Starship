import axios from 'axios';
import { Starship } from './App';

export const fetchStarships = async () => {
  const url = 'https://swapi.dev/api/starships/';
  const response = await axios.get(url);
  return response.data.results as Starship[];
};