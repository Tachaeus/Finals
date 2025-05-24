import React, { useState } from 'react'
import Card from './components/card.jsx'
import './components/styles.css'
import './App.css'

function App() {

  return (
    <section className="section_prime">
    <div className="body">
      <header>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
            </ul>
            <span className="menu">
              <button className="menuBtn">≣</button>
              <div className="dropDown">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
              </div>
            </span>
            
            <h1><i className="logo">♠</i>Scriptor</h1>
            <ul>
                <li><a href="">Scriptors</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
      </header>
      <Card />
      <footer>
        <div className="region_one">
          <span className="region_one_links">
          <h1>Scriptor</h1>
          <ul className="view">
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Scriptors</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <ul className="socials">
            <li><a href="">WhatsApp</a></li>
            <li><a href="">StackOverflow</a></li>
            <li><a href="">Medium</a></li>
            <li><a href="">LinkedIn</a></li>
          </ul>
          </span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjQDyrP0wXXKuVSiLUA3lXcOscW4A-e6JTQ&s" /><br />
        </div><br />
        <ul className="meta">
          <li><a href="">Terms Of Service</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><p>&copy; Scriptor {new Date().getFullYear()}. All Rights Reserved</p></li>
        </ul>
      </footer>
    </div>
    </section>
  )
}

export default App
