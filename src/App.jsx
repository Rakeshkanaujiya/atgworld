import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/topbar/TopBar'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative">
      <TopBar />
      <Header />
      <Home />
    </div>
  );
}

export default App
