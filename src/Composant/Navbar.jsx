import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/home">Home</a>
  <Link class="navbar-brand" to="/home" >home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        {/* <a class="nav-link" href="/App">App <span class="sr-only">(current)</span></a> */}
      <Link to="App">App</Link>
      </li>
      <li class="nav-item">
        <br></br>
        {/* <a class="nav-link" href="/Hello">Hello</a>  */}

        <Link to="Hello">Hello</Link>

      </li>
      
    </ul>
    
  </div>
</nav>
    </div>
  )
}
