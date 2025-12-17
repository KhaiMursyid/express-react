import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [backendData, setBackendData] = useState({ users: [] })

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data)
      })
      .catch(console.error)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link">
          {backendData.users.length
            ? backendData.users.join(", ")
            : "Loading..."}
          TEST
        </a>
      </header>
    </div>
  )
}

export default App
