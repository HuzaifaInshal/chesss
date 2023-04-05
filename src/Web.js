import React from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Material from './components/Material';
import Buy from './components/Buy'

const Web = () => {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<App/>}/>
          <Route path='/material' element={<Material/>}/>
          <Route path='/checkout' element={<Buy/>}/>
        </Routes>
      </Router>
  )
}

export default Web