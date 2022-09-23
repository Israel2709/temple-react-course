import './App.scss'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { Routes, Route, Link } from 'react-router-dom'
import UsersList from './Pages/users-list'
import CreateUser from './Pages/create-user'
import Home from './Pages/home'
import UserDetail from './Pages/user-detail'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [pageOpen, setPageOpen] = useState('users-list')

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='App'>
      <Navbar expand='sm'>
        <NavbarBrand href='/'></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='users-list' className='nav-link'>
                Lista de usuarios
              </Link>
            </NavItem>
            <NavItem>
              <Link to='create-user' className='nav-link'>
                Crear usuario
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className='container'>
        <div className='row'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='create-user' element={<CreateUser />} />
            <Route exact path='users-list' element={<UsersList />} />
            <Route
              exact
              path='users-list/user-detail/:userId'
              element={<UserDetail />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
