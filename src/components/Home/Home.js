import React, { useState, useEffect } from 'react';

const Home = () => {

  console.log('Inside Home!');

  const [ profileName, setProfileName ]  = useState('Arun');

  const [ topicName, setTopicName ] = useState('React Hooks');

  // similar to componentDidMount and shouldComponentUpdate
  useEffect( () => {
    console.log('Inside useEffect');
    document.title = topicName;
  }, [ topicName ]);

  const handleProfileNameChange = () => {
    setProfileName('Arun Vj');
  }

  return (
    <div>
      <h1>Welcome to My Home Page!</h1>
      <h2> useState -- Demo</h2>
      <p>{profileName}</p>

      <button onClick={ handleProfileNameChange }>Change Profile Name</button>

      <hr />
      <h2> useEffect -- Demo</h2>
      <p>{topicName}</p>
      <input type="text" value={topicName} 
      onChange={ (event) => { setTopicName(event.target.value) }}></input>
    </div>
  )
}

export default Home;
