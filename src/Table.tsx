import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Starship } from './App';
import './Table.css';



interface TableProps {
  starships: Starship[];
}

const CustomTable: React.FC<TableProps> = ({ starships }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="bold-cell">Name</TableCell>
            <TableCell className="bold-cell">Model</TableCell>
            <TableCell className="bold-cell">Passengers</TableCell>
            <TableCell className="bold-cell">Class</TableCell>
            <TableCell className="bold-cell">Speed</TableCell>
            <TableCell className="bold-cell">Cargo Capacity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {starships.map((starship, index) => (
            <TableRow key={index}>
              <TableCell>{starship.name}</TableCell>
              <TableCell>{starship.model}</TableCell>
              <TableCell>{starship.passengers}</TableCell>
              <TableCell>{starship.starship_class}</TableCell>
              <TableCell>{starship.max_atmosphering_speed}</TableCell>
              <TableCell>{starship.cargo_capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
  );
};

export default CustomTable;


