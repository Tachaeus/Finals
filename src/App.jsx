import { useState } from 'react'
import Card from './components/card.jsx'
import './components/styles.css'
import './App.css'

function App() {
  const [click, setClick] = useState(false);
  const Hamburger = <button color="black" onClick={() => setClick(!click)}>≣</button>
  const Close = <button color="black" onClick={() => setClick(!click)}>≣</button>

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
              {click ? Close : Hamburger}
              {
              click && 
              <ul className="dropDown">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Scriptors</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Contact</a></li>
                </ul>
              }
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
          <h1>Scriptor</h1>
          <span className="region_one_links">
          <ul className="view">
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Scriptors</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <ul className="socials">
            <li><a href="">Github</a></li>
            <li><a href="">WhatsApp</a></li>
            <li><a href="">StackOverflow</a></li>
            <li><a href="">Medium</a></li>
            <li><a href="">LinkedIn</a></li>
          </ul>
          </span>
          <span className="footer_img_area">
            <h3>Get <br />The Service <br />You Deserve <br />Today</h3>
            <button>Get Started</button>
          </span>
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
