import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='Navbody'>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Question Bank</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Create Question</a>
  </li>
</ul>
    </div>
  )
}
