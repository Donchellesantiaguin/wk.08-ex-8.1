import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the image here
  const [image, setImage] = useState('');

  // Image paths here
  const alpacaImage = '/images/154537d6-ca0f-47be-ad7b-12bd5fb29c99.jpg';  // Relative path to the public folder
  const llamaImage = '/images/elmapa12_llama_cartoon_white_background_b406479b_a_by_greatartstudio_dfscncr-pre.jpg';  // Relative path to the public folder

  return (
    <div className="App">
      <h1>Click a button to select an image!</h1>

      {/* Button for Alpaca */}
      <button onClick={() => setImage(alpacaImage)}>Alpaca</button>

      {/* Button for Llama */}
      <button onClick={() => setImage(llamaImage)}>Llama</button>

      {/* Display the image based on the state */}
      <div>
        {image && <img src={image} alt="Selected animal" />}
      </div>
    </div>
  );
}

export default App;
