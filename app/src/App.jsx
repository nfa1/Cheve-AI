import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { auth , uiConfig } from "./database/firebaseResource.js";
import StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth";
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* add the firebase component */}
      <StyledFirebaseAuth
        id="firebaseui-auth-container"
        uiConfig={uiConfig}
        firebaseAuth={auth}
      />
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
