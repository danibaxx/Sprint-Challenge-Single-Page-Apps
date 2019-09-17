import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const LocationsList = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(resloc => {
      setLocations(resloc.data.results)
    })
    .catch(error => {
      console.log('Location Error', error)
    })
  }, []);

  return (
    <LSect className='location-list'>
      {locations.map(location => (
        <LDiv className='locations' key={location.id}>
          <h2>{location.name}</h2>
          <p>{location.type} {location.dimension}</p>
        </LDiv>
      ))}
    </LSect>
  );
}

export default LocationsList;

const LSect = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const LDiv = styled.div`
  border: 2px solid darkorchid;
  width: 250px;
  height: 125px;
  padding: 15px;
  margin: 15px;
`;
