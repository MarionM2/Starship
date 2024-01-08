import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Starship } from './App';

interface CardActions {
    starships: Starship[];
  }
  
  const StarshipCard : React.FC<CardActions> = ({ starships }) => { 
    return <React.Fragment>
        {starships.map((starship, index) => (
        <Card variant='outlined'>
          <CardContent>
              <Typography sx={{ fontSize: 14 }}>
                  {starship.model} 
              </Typography>
              <Typography variant="h5" component="div">
              {starship.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {starship.starship_class}
              </Typography>
              <Typography variant="body2">
              {starship.cargo_capacity}
              </Typography>
          </CardContent>
          </Card>
        ))}
      </React.Fragment>;
  };
  export default StarshipCard;


        