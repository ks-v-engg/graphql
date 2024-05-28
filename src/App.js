import React from "react";
import { useQuery } from "@apollo/client";
import { Getcountries } from './graphql';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { routegql } from './router';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function App() {
  const { data, loading, error } = useQuery(Getcountries);

  const objnavigation = useNavigate();

  const btnstate = (code) => {
    objnavigation('/states/'+code);
  }

  return ( 
  <div>
      <h1>GraphQL</h1>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <th>Sl.no</th>
          <th>Country</th>
          <th>Capital</th>
          <th>Country code</th>
          <th>Action</th>
        </thead>
        <tbody>
          {loading && <p>Fetching...</p>}
          {error && <p>Something went wrong</p>}
          {data && data?.countries?.map((country, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.code}</td>
              <td><Button variant="primary" size="sm" onClick={() => btnstate(country.code)}> View states</Button></td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
