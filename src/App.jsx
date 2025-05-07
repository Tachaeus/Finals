import React, { useState } from 'react'
import './components/styles.css'
import Card from './components/card.jsx'
import './App.css'

function App() {

  return (
    <div className="body">
      <header>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
            </ul>
            <h1>Scriptor</h1>
            <ul>
                <li><a href="">Scriptors</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
      </header>
      <Card />
      <footer>
        <h1>Scriptor</h1>
        <div className="region_one">
          <ul className="view">
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Scriptors</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <ul className="socials">
            <li><a href="">WhatsApp</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">StackOverflow</a></li>
            <li><a href="">LinkedIn</a></li>
          </ul>
          <img src="src/assets/cyber4.jpeg" alt="" /><br />
        </div><br />
        <ul className="meta">
          <li><a href="">Terms Of Service</a></li>
          <li><a href="">Privacy Policy</a></li>
          <p>&copy; {new Date().getFullYear()} Scriptor All Rights Reserved</p>
        </ul>
      </footer>
    </div>
  )
}

export default App
