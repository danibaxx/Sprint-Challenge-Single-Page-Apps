import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  // console.log('Characters', character)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(reschar => {
        setCharacters(reschar.data.results)
      })
      .catch(error => {
        console.log('Character Error', error)
      })
  }, []);

  return (
    <CustSect className='character-list'>
      {characters.map(character => (
          <ToonCard key={character.id}>
            <img
              className='character-img'
              src={character.image}
              alt={character.name}
            />
              <CDiv>
                <h2>{character.name}</h2>
                <p>{character.species} {character.status}</p>
                <p>Location: {character.location.name}</p>
                <p>Origin: {character.origin.name}</p>
              </CDiv>
          </ToonCard>
        ))}
    </CustSect>
  );
}

export default CharacterList;

const ToonCard = styled.div`
  border: 2px solid blueviolet;
  border-radius: 5px;
  width: 304px;
  height: 500px;
  margin-top: 15px;
`;

const CustSect = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CDiv = styled.div`
  padding: 15px;
`;