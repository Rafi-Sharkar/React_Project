import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className='Navbody'>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/question" class="nav-link" >Question Bank</Link>
  </li>
  <li class="nav-item">
    <Link to="/cqestion" class="nav-link" >Create Question</Link>
  </li>
</ul>
    </div>
  )
}
