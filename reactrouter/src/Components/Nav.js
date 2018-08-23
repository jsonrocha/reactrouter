import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Nav extends Component {
  render() {
    return (
        <header className="App-header">
        <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/photolist">Go to Photo List</Link>
          </li>
          <li>
            <Link to ="/photodetail">Go to Photo Detail</Link>
          </li>
        </ul>
        </nav>
        </header>
    )
  }
}

export default Nav;
