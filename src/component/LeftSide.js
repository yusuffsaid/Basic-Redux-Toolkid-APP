import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom'
import { selectWords,deleteFileASYNC  } from "../feature/wordSlice";

const LeftSide=(props)=> {
      const data = useSelector(selectWords);
      const dispatch = useDispatch()
      return (
            <div className="left-side">
                 <ul>
                       <li><NavLink to ="/" exact className="left-menu">Home</NavLink></li>
                       <li><NavLink to ="/new" className="left-menu">Add New</NavLink></li>

                       <hr/>

                       {
                             data.words.map(m=>(
                              <li key={m.id} className="left-menu-li"><NavLink to ={`/list/${m.id}`} className="left-menu">{m.name}   </NavLink><button className="clear-btn" onClick={()=>dispatch(deleteFileASYNC(m.id))}>X</button></li>
                             ))
                       }

                 </ul>
            </div>
      )
}

export default LeftSide
