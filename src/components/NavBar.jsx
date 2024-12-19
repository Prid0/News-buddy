import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
                    <div className="container-fluid">
                    <Link className="navbar-brand"  to="/">NewsBuddy</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav fw-normal">
                                <NavLink  className="nav-link " to="/">General</NavLink>
                                <NavLink  className="nav-link" to="/sports">Sports</NavLink>
                                <NavLink  className="nav-link" to="/business">Business</NavLink>
                                <NavLink  className="nav-link" to="/entertainment">Entertainment</NavLink>
                                <NavLink  className="nav-link" to="/health">Health</NavLink>
                                <NavLink  className="nav-link" to="/science">Science</NavLink>
                                <NavLink  className="nav-link" to="/technology">Technology</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
    </div>
  )
}



