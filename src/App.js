import './App.css';
import { useState, useEffect } from 'react';
import Land from './components/LandingPage';
import Second from './components/Second';
import Nav from './components/Nav';
import Third from './components/Third';
import Last from './components/Last';
import {data} from './data';

function App() {
  const [header, setHeader] = useState("header")

  const listenScrollEvent = (event) => {
    if (window.scrollY > 70) {
      return setHeader("black")
    } 
    else{
      return setHeader("transparent")
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

    
  return (
    <>
    <nav className='nav' id='nav' style={{backgroundColor:`${header}`}}><Nav/></nav>
    <section className='sec1'><Land/></section>
    <section className='sec2'><Second/></section>
    <section className='sec3'><Third data={data}/></section>
    <section className='sec4'><Last/></section>
    </>
  );
}

export default App;
