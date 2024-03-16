import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <Logo>My Website</Logo>
      </Link>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </Links>
    </nav>
  )
}

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
`

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`

const LinkItem = styled.li`
  margin: 0 1rem;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`

export default Navbar