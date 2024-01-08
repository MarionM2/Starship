import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomTable from './Table';  // custom table component
import './App.css';  //  CSS file for styling
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import StarshipCard from './Card';
import { Button } from '@mui/material';

// Define the Starship type
export type Starship = {
  cargo_capacity: number;
  starship_class: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
};


// Define the main App component
function App() {

  // State to hold the starship data or null if not loaded
  const [starships, setStarships] = useState<Starship[] | null>(null);
  const [showTable, setShowTable] = useState<boolean>(true);

  // useEffect to fetch starship data from the API on component mount
  // useEffect(() => {
    // API URL for starships data
    const url = 'https://swapi.dev/api/starships/';
    // Fetch data using axios and update state
    axios.get(url)
    .then((response) => {
      setStarships(response.data.results as Starship[]);
    });
  // }, []); 
  const handleClick= ()=>{
    setShowTable(!showTable) 
  }

  // Render the component with a title and the CustomTable if starships data is available
  return (
    // this is fragment helps with rendering multiple elements of a component without adding extra div tags
    <>
      <Typography variant ="h3" >
        Starships
      </Typography>
      <Button onClick={handleClick} variant="contained">Switch View</Button>
      {starships && showTable ?  <CustomTable starships={starships} />: <CircularProgress/>}
      {starships && !showTable ? <StarshipCard starships= {starships}/>: <CircularProgress/>}
    </>
     
 
    
  );
}


// Export the App component as the default export
export default App;

