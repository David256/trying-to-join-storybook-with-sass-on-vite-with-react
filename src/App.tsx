import { useState } from 'react'
import './App.css'

import { SpatialButton } from './components/SpatialButton/SpacialButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Trying to Join the Storybook with SASS on vite.js with React</p>

        <SpatialButton value="Click me" />
      </header>
    </div>
  )
}

export default App
