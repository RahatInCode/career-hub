import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/Authcontext/Authcontext';





const Navbar = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log('User logged out successfully');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/jobs">Find a Job</NavLink></li>
    <li><NavLink to="/recruiters">Recruiters</NavLink></li>
    <li><NavLink to="/candidates">Candidates</NavLink></li>
    <li><NavLink to="/pages">Pages</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">Career Hub</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-6">
        {
          user ? (
            <button className="btn" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <NavLink to="/signIn" className="btn btn-neutral">Sign In</NavLink>
              <NavLink to="/register" className="btn btn-neutral">Sign Up</NavLink>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
