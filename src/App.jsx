import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
function Dashboard() {
  return (
    <div>
      <About/>
    </div>
  );
}
function App() {

return(
  <div>
<Dashboard/>
  </div>
)
}

export default App
 
