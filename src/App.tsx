import React from 'react';
import Lottie from 'react-lottie';
import animationData from './assests/coming-soon.json'
import './App.css';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Lottie 
        options={defaultOptions}
        height={565}
        width={668}
      />
      </header>
    </div>
  );
}

export default App;
