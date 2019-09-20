import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(resesp => {
        setEpisodes(resesp.data.results)
      })
      .catch(error => {
        console.log('Episode Error', error)
      })
  }, [])
  return (
    <ESect className='episode-list'>
      {episodes.map(episode => (
        <EDiv key={episode.id}>
          <h2>{episode.name}</h2>
          <p>{episode.air_date} {episode.episode}</p>
        </EDiv>
      ))}
    </ESect>
  );
}

export default EpisodeList;

const ESect = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const EDiv = styled.div`
  border: 2px solid darkorchid;
  width: 300px;
  height: 125px;
  padding: 15px;
  margin: 15px;
`;
