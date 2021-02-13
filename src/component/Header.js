import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./styles.css"
export default function Header() {
      return (
            <header>
                  <div className="logo"><h3>Kartlarım</h3></div>
                  <ul className="menu-container">
                        <li>
                              <NavLink to="/" exact className="menu">HOME</NavLink>
                        </li>
                        <li>
                              <NavLink to ="/new" className="menu">ADD NEW</NavLink>
                        </li>
                  </ul>
                  <div className="other"><h5>AYARLAYACAZ</h5></div>
            </header>
      )
}
