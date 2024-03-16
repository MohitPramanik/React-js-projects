import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ProductsPage from './pages/Products'
import ContactPage from './pages/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  )
}

export default App